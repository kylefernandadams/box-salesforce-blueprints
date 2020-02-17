global with sharing class BoxContentUploaderController {
    public static final String HEADER_CONTENT_TYPE = 'Content-Type';
    public static final String HEADER_APPLICATION_ENCODED = 'application/x-www-form-urlencoded';
    public static final String TOKEN_URL_STRING = 'https://api.box.com/oauth2/token';

    @AuraEnabled(cacheable=true)
    public static String getToken(String scopes) {
        // Set JWT Connection variables
        String publicKeyId = 'PUBLIC_KEY_ID';
        String privateKey = 'DECRYPTED_PRIVATE_KEY';
        String enterpriseId = 'ENTERPRISE_ID';
        String clientId = 'CLIENT_ID';
        String clientSecret = 'CLIENT_SECRET';

        // Get a service account connection
        BoxJwtEncryptionPreferences preferences = new BoxJwtEncryptionPreferences();
        preferences.setPublicKeyId(publicKeyId);
        preferences.setPrivateKey(privateKey);
        BoxPlatformApiConnection api = BoxPlatformApiConnection.getAppEnterpriseConnection(enterpriseId, clientId, clientSecret, preferences);

        // Set token exchange URL parameters
        String parentToken = api.getAccessToken();
        String urlParameters = 
            String.format('subject_token={0}' +
       		'&subject_token_type=urn:ietf:params:oauth:token-type:access_token' +
            '&grant_type=urn:ietf:params:oauth:grant-type:token-exchange' +
            '&scope={1}', new String[] {parentToken, scopes});

        // Create the BoxApiRequest
        BoxApiRequest request = new BoxApiRequest(api, TOKEN_URL_STRING, BoxApiRequest.METHOD_POST);
        request.shouldAuthenticate = false;
        request.setBody(urlParameters);
        request.addHeader(HEADER_CONTENT_TYPE, HEADER_APPLICATION_ENCODED);
        request.setTimeout(api.getTimeout());
        
        // Send the POST request and parse the response
        HttpResponse response = request.send();
        String downscopedToken;
        if (response.getStatus() == 'OK') {
            BoxGenericJsonObject authResponse = new BoxGenericJsonObject(response.getBody());
            downscopedToken = authResponse.getValue('access_token');
        } else {
            System.debug('BoxPlatformApiConnection unable to authenticate to generate tokens');
        }
        
        // Return downscoped token
        return downscopedToken;    
    }
}
