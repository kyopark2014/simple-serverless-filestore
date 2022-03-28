## WEB Client

WEB client의 경우에 curl이나 postman보다 사용자가 편리하게 사용할 수 있습니다. 다만 이 경우에 CORS 회피 동작이 필요합니다.

관련동작은 [Choose File]을 통해 파일을 선택하고, [start]버튼을 눌러서 업로드를 합니다. 업로드 성공시 오른쪽 로그화면에서 200OK를 받음을 확인 할 수 있습니다.  

<img width="1192" alt="image" src="https://user-images.githubusercontent.com/52392004/160367541-bbe0512d-87c6-49ed-806f-84bf7f1641e7.png">


### HTML

upload.html은 아래와 같이 매우 간단히 구현하였습니다. 

```html
<html>
  <body>	
    <form id="my-form">
        <h3>Select your picture</h3>

        <!-- <input type="file" id="upload_file" name="image" accept="image/png, image/jpeg">-->
        <input type="file" id="upload_file" name="image">

        <button name="start" id="start">start</button>
    </form>		
    
    <script src="upload.js"></script> 
	</script> 
	<script>
		function myFunction() {
		  var x = document.getElementById("name").value;
      
		  console.log('filename: '+x);
		}
	</script> 
	<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
  </body>	
</html>
```

### Java Script

API Gateway를 endpoint로 활영하여 파일을 업로드를 아래와 같이 수행할 수 있습니다. 

upload.js는 아래와 같이 구현할 수 있습니다. 

```java
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
