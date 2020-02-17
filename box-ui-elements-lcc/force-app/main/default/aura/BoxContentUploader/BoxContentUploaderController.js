({
    handleMessage: function (component, event) {
        var message = event.getParams();
        var payload = message.payload;
        console.log('Received Message from JS App: ', JSON.stringify(payload));

        var action = component.get("c.getToken");
        var scopes = 'base_upload';
        action.setParams({ scopes: scopes });
        action.setCallback(this, function(response) {
            var folderId = '0';
            var accessToken = response.getReturnValue();          
            var message = {
                name: "myMessage",
                value: {
                    folderId: folderId,
                    accessToken: accessToken
                }
            };
            component.find("uploaderApp").message(message);
        });
        $A.enqueueAction(action);
    }, 
    handleError: function(component, error, helper) {
        var description = error.getParams().description;
        console.log('Failed to load lightning container: ', description);
    }, 
})
