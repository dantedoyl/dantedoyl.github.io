
function main(){
  const file = document.getElementById('file_name').files[0];
  
  firebase.storage().ref('requests/' + file.name).put(file).on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
  }
},function(){
  firebase.storage().ref('requests/' + file.name).getDownloadURL().then( function(file_url){
    firebase.database().ref('requests/').push(
    {
        FIO: fio.value,
        Email: email.value,
        Phone: Phone.value,
        Description: Descrip.value,
        File_Path: file_url 
    }, 
    function(error) {
        if (error) {
              document.getElementById("basis").style.boxShadow="rgba(0, 0, 0, 0.3) 0px 1px 4px, rgba(255, 0, 0, 0.8) -23px 0px 40px -23px, rgba(255, 0, 0, 0.8) 23px 0px 40px -23px, rgba(0, 0, 0, 0.1) 0px 0px 40px inset";
        }else {
              document.getElementById("basis").style.boxShadow="0 1px 4px rgba(0, 0, 0, .3), -23px 0 40px -23px rgba(39, 255, 0, 0.8), 23px 0 40px -23px rgba(39, 255, 0, .8), 0 0 40px rgba(0, 0, 0, .1) inset";
        }
})
})});
}