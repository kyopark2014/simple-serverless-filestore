# 서버 삭제 하는 방법

여기에서는 더 이상 사용하지 않을 경우에 서버를 삭제하는 방법에 대해 기술합니다. 

삭제는 생성순서를 역순으로 하고자 합니다.

## 1. CloudFront

1) CloudFront Console로 이동합니다. 
https://console.aws.amazon.com/cloudfront/v3/home?region=ap-northeast-2#/distributions

2) Simple Serverless Filestore로 생성했던 CloudFront를 선택합니다. 별도로 Description에 설명하지 않은 경우는 Origins 주소를 참조합니다. 

![image](https://user-images.githubusercontent.com/52392004/156904736-95b9a730-400c-4d89-ab44-441436cad485.png)

3) [Disable]을 선택하고, 아래와 같이 팝업이 나오면 [Disable]을 다시 선택합니다.

![image](https://user-images.githubusercontent.com/52392004/156904749-5e26d444-aa92-4b06-83ae-eb3f6f37ea2c.png)

4) 다시 선택해도 아래와 같이 "Deploying" 상태에서는 삭제 할 수 없습니다. 

![noname](https://user-images.githubusercontent.com/52392004/156904790-d990dfff-7ee8-4c17-a2e9-d4ba8c82fc17.png)

5) 몇분후 "Deploying"이 완료되면 아래와 같이 삭제 버튼이 활성화 되고 삭제 할 수 있습니다. 

![image](https://user-images.githubusercontent.com/52392004/156904820-95e51919-bb02-4315-a38e-275f2fb2269b.png)

6) [Delete] 선택하고, 아래와 같이 팝업 알림이 나오면 [Delete] 합니다.

![image](https://user-images.githubusercontent.com/52392004/156904830-898e9631-3346-4cc0-9648-34e5458ae310.png)

