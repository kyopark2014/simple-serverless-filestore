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


## 2. SNS 삭제 

1) SNS Console로 진입합니다. 

https://ap-northeast-2.console.aws.amazon.com/sns/v3/home?region=ap-northeast-2#/topics

2) 삭제할 Topic을 선택합니다.

![noname](https://user-images.githubusercontent.com/52392004/156904898-8032b173-2b92-4120-a888-eb28878e723a.png)

3) 팝업이 나오면, [Delete]를 선택하여 삭제합니다.
![image](https://user-images.githubusercontent.com/52392004/156904917-0ea86b35-f765-4144-a0ab-a29edbf76101.png)


## 3 API Gateway 삭제

1) API Gateway의 Console로 접속합니다.

https://ap-northeast-2.console.aws.amazon.com/apigateway/main/apis?region=ap-northeast-2

2) [api-simple-filestore]를 선택합니다. 

![image](https://user-images.githubusercontent.com/52392004/156904969-411452dd-3b42-4e1e-918f-116a73432710.png)

3) [Action]에서 [Delete]를 선택하면 아래와 같은 팝업이 나오는데 [Delete]를 선택하여 삭제합니다. 

![image](https://user-images.githubusercontent.com/52392004/156905003-e1de0073-b517-4020-9ed0-e99bb5d4bf8f.png)


## 4 Lambda 삭제

1) Lambda Console로 접속합니다. 

https://ap-northeast-2.console.aws.amazon.com/lambda/home?region=ap-northeast-2#/functions

2) [lambda-simple-filestore-upload]와 [lambda-simple-filestore-notification]을 선택후, [Actions]에서 [Delete]를 선택합니다. 

![image](https://user-images.githubusercontent.com/52392004/156905044-dd6558d3-3a58-4d96-904c-87d0aaabd6a2.png)

3) 아래와 같이 팝업에서 [Delete]를 선택하여 삭제합니다. 

![image](https://user-images.githubusercontent.com/52392004/156905076-ef65668b-cb78-4623-b066-491a8d43092d.png)

## 5. S3 삭제

1. S3 Console로 접속합니다. 

https://s3.console.aws.amazon.com/s3/home?region=ap-northeast-2#

2. [s3-simple-filestore]로 진입하여 먼저 남아있는 모든 Object를 삭제합니다. 

![image](https://user-images.githubusercontent.com/52392004/156905207-dd339e19-6b04-449c-8904-d3c9f3a14469.png)

[Delete objects]를 선택하여 삭제합니다. 

![image](https://user-images.githubusercontent.com/52392004/156905230-f019428d-b630-4f2e-a1b9-1a47410f401f.png)

3. [Amazon S3] - [Buckets]에서 [s3-simple-filestore]를 선택후 [Delete] 합니다. 
![image](https://user-images.githubusercontent.com/52392004/156905152-c2382768-3171-415d-a4c0-50d8a7cb72ac.png)

아래와 같이 [Delete bucket]을 선택하여 삭제합니다. 

![image](https://user-images.githubusercontent.com/52392004/156905284-d922a482-232c-48cb-8757-cbe46cb932be.png)

