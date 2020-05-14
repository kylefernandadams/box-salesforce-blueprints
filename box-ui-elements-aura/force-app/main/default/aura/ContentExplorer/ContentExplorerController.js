({
    doInit : function(component, event, helper) {
        var action = component.get("c.getFolderMap");
        var recordId = component.get("v.recordId");

        action.setParams({ 
            recordId: recordId, 
            scopes: 'base_explorer item_preview item_delete item_download item_upload item_share item_rename root_readwrite'
        });
        action.setCallback(this, function(response) {
            var folderMap = response.getReturnValue();            
            var downscopedToken = folderMap.downscopedToken; 
            var folderId = folderMap.folderId;
            console.log('Found folder id in js controller: ', folderId);
    
            if(folderId != null) {
                var baseURL = window.location.origin;
                var previewResource = $A.get("$Resource.preview");
                var logoUrl = component.get("v.logoUrl");
                var explorer = new Box.ContentExplorer();
                var explorerContainer = component.find("explorer-container").getElement();

                explorer.show(folderId, downscopedToken, {
                    container: explorerContainer,
                    logoUrl: logoUrl,
                    staticHost: baseURL,
                    autoFocus: true,
                    canPreview: true,
                    canDownload: true,
                    canUpload: true,
                    contentPreviewProps: {
                        staticPath: previewResource.substr(1),
                        previewLibraryVersion: '2.42.0',
                        contentSidebarProps: {
                            detailsSidebarProps: {
                                hasNotices: true,
                                hasProperties: true,
                                hasAccessStats: true,
                                hasClassification: true,
                                hasRetentionPolicy: true,
                                hasVersions: true
                            },
                            hasActivityFeed: true,
                            hasSkills: true,
                            hasMetadata: true
                        },
                        contentOpenWithProps: {
                            show: false
                        }
                    }
                });
            }
        });
        $A.enqueueAction(action);
    }
})
