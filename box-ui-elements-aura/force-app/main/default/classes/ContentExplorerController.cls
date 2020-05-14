public with sharing class ContentExplorerController {
    public ContentExplorerController() {

    }

    @AuraEnabled(cacheable=true)
    public static Map<String,String> getFolderMap(String recordId, String scopes) {
        Map<String,String> folderMap = new Map<String,String>();

        if(!String.isEmpty(recordId)) {
            System.debug('Found case record id: ' + recordId);

            // Get the folder id
            box__FRUP__c frup = [SELECT box__Folder_ID__c, box__Record_ID__c FROM box__FRUP__c WHERE box__Record_ID__c = :recordId LIMIT 1];
            String folderId = frup.box__Folder_ID__c;
            System.debug('Found case folder with id: ' + folderId);

            if(String.isEmpty(folderId)) {
                // We could dynamically create a new folder if it doesnt exist
            }

            // Get the service account access token
            BoxConnection box = BoxConnection.getInstance();
            String accessToken = box.accessToken;

            // Create a resource for the folder
            String resource = 'https://api.box.com/2.0/folders/' + folderId;
            System.debug('Downscoping resource: ' + resource);

            // Exchange the service account access token for a downscoped token that is safer
            String downscopedToken = BoxConnection.exchangeToken(accessToken, scopes, resource); 

            // Create the map to return to the lightning component
            folderMap.put('downscopedToken', downscopedToken);
            folderMap.put('folderId', folderId);
        } else {
            System.debug('Found null recordId!');
        }
        return folderMap;
    }
}
