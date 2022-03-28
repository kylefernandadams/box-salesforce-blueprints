public with sharing class CanvasAppLifecycleHandler implements Canvas.CanvasLifecycleHandler {

    public Set<Canvas.ContextTypeEnum> excludeContextTypes(){
        Set<Canvas.ContextTypeEnum> excluded = new Set<Canvas.ContextTypeEnum>();

        return excluded;
    }

    public void onRender(Canvas.RenderContext renderContext) {
        Canvas.ApplicationContext app = renderContext.getApplicationContext();
        Canvas.EnvironmentContext env = renderContext.getEnvironmentContext();

        System.debug('Entity fields: ' + env.getEntityFields());
        System.debug('Location URL: ' + env.getLocationUrl());
        System.debug('Display Location: ' + env.getDisplayLocation());
        System.debug('Sub Location: ' + env.getSublocation());
        System.debug('Params as json: ' + env.getParametersAsJSON());
    
        Set<String> fields = new Set<String>{'*', 'Name'};
        env.addEntityFields(fields);
        Map<String, Object> previousParams = (Map<String, Object>) JSON.deserializeUntyped(env.getParametersAsJSON());

        String recordId = String.valueOf(previousParams.get('recordId'));
        System.debug('Found record id: ' + recordId);

        // Get the folder id
        box__FRUP__c frup = [SELECT box__Folder_ID__c, box__Record_ID__c FROM box__FRUP__c WHERE box__Record_ID__c = :recordId LIMIT 1];
        String folderId = frup.box__Folder_ID__c;
        System.debug('Found case folder with id: ' + folderId);

        if(!String.isEmpty(folderId)) {
            // We could dynamically create a new folder if it doesnt exist
            previousParams.put('folderId', folderId);
        }
    
        env.setParametersAsJSON(JSON.serialize(previousParams));
    }
}