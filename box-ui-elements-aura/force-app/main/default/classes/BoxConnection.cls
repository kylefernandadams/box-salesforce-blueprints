public with sharing class BoxConnection {
    public static final String HEADER_CONTENT_TYPE = 'Content-Type';
    public static final String HEADER_APPLICATION_ENCODED = 'application/x-www-form-urlencoded';
    public static final String TOKEN_URL_STRING = 'https://api.box.com/oauth2/token';

    private static BoxConnection instance = null;
    public BoxPlatformApiConnection api { get; private set; }
    public String accessToken { get; private set; }

    private BoxConnection() {
            String publicKeyId = '';
            String privateKey = '';
            String enterpriseId = '';
            String clientId = '';
            String clientSecret = '';

            BoxJwtEncryptionPreferences preferences = new BoxJwtEncryptionPreferences();
	          preferences.setPublicKeyId(publicKeyId);
            preferences.setPrivateKey(privateKey);
                        
            api = BoxPlatformApiConnection.getAppEnterpriseConnection(enterpriseId, clientId, clientSecret, preferences);
            accessToken = api.getAccessToken();

    }

    public static BoxConnection getInstance() {
        if(instance == null) {
            instance = new BoxConnection();
        }
        return instance;
    }

    @AuraEnabled(cacheable=true)
    public static String exchangeToken(String parentToken, String scopes, String resource) {
        String downscopedToken;

        // Construct the JWT URL parameters
        String urlParameters =
            String.format('subject_token={0}' +
       		'&subject_token_type=urn:ietf:params:oauth:token-type:access_token' +
            '&grant_type=urn:ietf:params:oauth:grant-type:token-exchange' +
            '&scope={1}' +
            '&resource={2}', new String[] {parentToken, scopes, resource});

        // Get a service account connection
        BoxConnection box = BoxConnection.getInstance();
        BoxPlatformApiConnection api = box.api;

        // Create the request object
        BoxApiRequest request = new BoxApiRequest(api, TOKEN_URL_STRING, BoxApiRequest.METHOD_POST);
        request.shouldAuthenticate = false;
        request.setBody(urlParameters);
        request.addHeader(HEADER_CONTENT_TYPE, HEADER_APPLICATION_ENCODED);
        request.setTimeout(api.getTimeout());

        // Issue the POST request and parse the response
        HttpResponse response = request.send();
        if (response.getStatus() == 'OK') {
            BoxGenericJsonObject authResponse = new BoxGenericJsonObject(response.getBody());
            downscopedToken = authResponse.getValue('access_token');
        } else {
            System.debug('BoxPlatformApiConnection unable to authenticate to generate tokens');
        }

        return downscopedToken;
    }
}
