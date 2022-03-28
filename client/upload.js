const myForm = document.querySelector('#my-form');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  var x = document.getElementById("upload_file").value;

  // extract filename
  var filename = x.replace(/^.*[\\\/]/, '')
  console.log('filename: '+filename);

  var name = "";
  for(i=0;i<filename.length;i++) {
    if(filename[i]=='.') break;
    name += filename[i];
  }
  console.log('name: '+name);

  var ext = filename.split('.').pop();
  console.log('ext: '+ext);

  var contentType;
  if(ext == "jpeg") {
    contentType = 'image/jpeg';
  }
  else if(ext == "jpg") {
    contentType = 'image/jpg';
  }
  else if(ext == "png") {
    contentType = 'image/png';
  }
  else {
    contentType = 'application/octet-stream';
  }

  console.log('content-type: '+contentType);

  // upload
  var fileInput = document.getElementById("upload_file");
  var file = fileInput.files[0];
  
  const url = 'https://7jklt026d0.execute-api.ap-northeast-2.amazonaws.com/dev/upload';
  var formData = new FormData();
  formData.append("upload_file" , file);
  
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.open("POST", url, true);     
  
  xmlHttp.setRequestHeader('Content-Type', 'image/jpeg');
  xmlHttp.setRequestHeader('Accept', "image/webp,image/*,*/*;q=0.8");
  xmlHttp.setRequestHeader('Content-Disposition', 'form-data; name="'+name+'"; filename="'+filename+'"');
  
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == XMLHttpRequest.DONE && xmlHttp.status == 200 ) {
      console.log(xmlHttp.responseText);
    }
  };
  
  xmlHttp.send(formData); 
  console.log(xmlHttp.responseText); 
}
