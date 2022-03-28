({
    doInit : function(cmp) {
        var recordId = cmp.get("v.recordId");
        var userId = cmp.get("v.userId");

        cmp.set("v.params", '{"recordId": "' + recordId + '", "userId": "' + userId + '", "elementType": "recents" }');
    }
})
