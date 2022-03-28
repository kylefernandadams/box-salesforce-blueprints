({
    doInit : function(cmp) {
        var recordId = cmp.get("v.recordId");
        var folderId = cmp.get("v.folderId");

        cmp.set("v.params", '{"recordId": "' + recordId + '", "folderId": "' + folderId + '", "elementType": "explorer" }');
    }
})
