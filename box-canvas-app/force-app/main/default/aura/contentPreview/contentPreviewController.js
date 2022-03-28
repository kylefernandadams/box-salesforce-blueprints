({
    doInit : function(cmp) {
        var recordId = cmp.get("v.recordId");
        var fileId = cmp.get("v.fileId");

        cmp.set("v.params", '{"recordId": "' + recordId + '", "fileId": "' + fileId + '", "elementType": "preview" }');
    }
})
