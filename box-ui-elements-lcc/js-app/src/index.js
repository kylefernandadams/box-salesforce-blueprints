import LCC from 'lightning-container';

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded. Calling Apex controller...');
    LCC.sendMessage({
        name: 'jsApp',
        value: 'DOM ready'
    });
    // Calling apex from the JS app is actually slower than messaging the lightning:container and calling Apex from the ltn controller
    // Not sure why
    // var scopes = 'base_upload';
    // LCC.callApex("BoxContentUploaderController.getDownScopedToken",
    //     scopes,
    //     resultHandler,
    //     { escape: true });
})


// function resultHandler(accessToken, event) {
//     console.log('LCC Call Apex - Result handler: ', accessToken);
//     if (event.status) {
//         // Set Folder Id to the Root folder 
//         var rooFolderId = '0';

//         // Show the content uploader
//         var uploader = new Box.ContentUploader();
//         uploader.show(rooFolderId, accessToken, {
//             container: '.uploader-container'
//         });

//         // Log upload data to console
//         uploader.on('complete', (data) => { 
//             console.log(`All files successfully uploaded: ${JSON.stringify(data)}`); 
//         });

//         uploader.on('upload', (data) => {
//             console.log(`Successfully uploaded file with name "${data.name}" to Box File ID ${data.id}`);
//         });

//         uploader.on('error', (data) => {
//             console.log(`Error uploading file with name "${data.file.name}". The error was: "${JSON.stringify(data.error)}"`);
//         });

//         uploader.on('close', (data) => {
//             console.log('Closing...');
//             uploader.hide();
//             uploader.show(rooFolderId, accessToken, {
//                 container: '.uploader-container'
//             });
//         })
//     } else if (event.type === "exception") {
//         console.log(event.message + " : " + event.where);
//     }
// }

// Register for messages sent by hosting component
LCC.addMessageHandler(function(message) {
    var folderId = message.value.folderId;
    var accessToken = message.value.accessToken;

    console.log('Found folder id from LCC: ', folderId);
    console.log('Found access token from LCC: ', accessToken);

    // Show the content uploader
    var uploader = new Box.ContentUploader();
    uploader.show(folderId, accessToken, {
        container: '.uploader-container'
    });

    // Log upload data to console
    uploader.on('complete', (data) => { 
        console.log(`All files successfully uploaded: ${JSON.stringify(data)}`); 
    });

    uploader.on('upload', (data) => {
        console.log(`Successfully uploaded file with name "${data.name}" to Box File ID ${data.id}`);
    });

    uploader.on('error', (data) => {
        console.log(`Error uploading file with name "${data.file.name}". The error was: "${JSON.stringify(data.error)}"`);
    });

    uploader.on('close', (data) => {
        console.log('Closing...');
        uploader.hide();
        uploader.show(folderId, accessToken, {
            container: '.uploader-container'
        });
    })
});


LCC.addErrorHandler(function(error) {
    console.log('Found error receiving message from lightning container: ', JSON.stringify(error));
});