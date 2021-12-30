// Function to Show Recent Upload Files

function readDowload() {
    db.collection("UploadedFiles").orderBy('DateOfUpload', "desc").onSnapshot((snapshot) => {
        startDisplay(snapshot)



    });
}
