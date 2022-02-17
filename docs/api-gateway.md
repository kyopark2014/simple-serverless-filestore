# 파일 공유 서비스 - API Gateway 설정

Amazon API Gateway  는 REST 및 WebSocketAPI 등을 생성, 배포, 유지 관리 할 수 있는 AWS 서비스로 모든 규모의 API 를 개발자가 손쉽게 구성할 수 있도록 해줍니다.


1. AWS 콘솔  에서 Amazon API Gateway 서비스로 이동합니다.
   https://ap-northeast-2.console.aws.amazon.com/apigateway/main/apis?region=ap-northeast-2#

![image](https://user-images.githubusercontent.com/52392004/154442482-df72590b-6a5f-4e03-97a3-9ebee6885076.png)


2. 우측 상단의 [Create API] 를 클릭하고 [REST API] 옵션의 [Build] 버튼을 선택합니다.


![image](https://user-images.githubusercontent.com/52392004/154442558-33e75fb0-dd37-4726-b5a5-c4c4846b93c5.png)

3. API 생성 화면에서 Create new API 에는 [New API] 를 선택하고 하단 Settings 의 [API name] 에는 “api-simple-filesharing” 를 입력합니다. [Endpoint Type] 은 Regional 을 선택합니다. API 트래픽의 오리진에 따라 Edge, Regional, Private 등의 옵션  을 제공하고 있습니다. [Create API] 를 클릭하여 API 를 생성합니다.


![image](https://user-images.githubusercontent.com/52392004/154481880-b59b0b14-fbf4-408e-95f5-b3e1a340e62a.png)






4. 미디어 파일을 지원하기 위해 [API: api-filesharing] - [Settings] 에서 스크롤하여 [Binary Media Types]를 아래와 같이 설정합니다.



![image](https://user-images.githubusercontent.com/52392004/154482151-aafa3e55-5a43-4acc-92d9-e832e5a92398.png)

5. API 생성이 완료되면 [Resources] 메뉴 상단의 [Actions] 버튼을 드롭 다운 한 뒤 [Create Resources] 옵션을 선택합니다. 



<img width="695" alt="image" src="https://user-images.githubusercontent.com/52392004/153713845-60f15fc2-e173-4c63-b169-e015dfb881b4.png">

6. [New Child Resource]에서 [Resource Name]을 입력하고 [Create Resource]를 선택합니다.


<img width="972" alt="image" src="https://user-images.githubusercontent.com/52392004/153713987-29db83d2-7bb0-4217-bb0c-b01c92c4ff18.png">




7. API 생성이 완료되면 [Resources] 메뉴 상단의 [Actions] 버튼을 드롭 다운 한 뒤 [Create Method] 옵션을 선택합니다. 


<img width="418" alt="image" src="https://user-images.githubusercontent.com/52392004/153714119-75ec561e-7f07-483a-ac69-787e2a735d77.png">


생성된 빈 드롭 다운 메뉴에서는 [POST] 을 선택한 뒤 체크 버튼을 클릭합니다.



<img width="416" alt="image" src="https://user-images.githubusercontent.com/52392004/153714163-32b2411e-0dc4-46b3-bbd6-e2bd5f80ecbe.png">




8. / - POST - Setup 화면이 나타납니다. [Ingegration type] 은 Lambda Function 을 선택하고 [Lambda Region] 은 ap-northeast-2 를 선택합니다. [Lambda Function] 에는 미리 만든 lambda-filesharing-upload 를 선택합니다. [Save] 를 선택하여 API 메소드 생성을 완료합니다.




![image](https://user-images.githubusercontent.com/52392004/154482449-cfa972c8-b3b5-4044-a69c-4644667be462.png)


9. Add Permission to Lambda Function 팝업이 나타나면 [OK] 를 선택합니다.



![image](https://user-images.githubusercontent.com/52392004/154482558-ac3a282c-83ca-430b-b641-01df2eb0bdb9.png)

이후 아래와 같이 생성된 API 를 확인 할 수 있습니다.




![image](https://user-images.githubusercontent.com/52392004/154482679-65ad7f7a-7d48-4b56-9938-86c60b26d28b.png)



10. Binary contents 처리를 위해 [API-filesharing] - [Resources] - [upload/POST] - [Integration Request]를 선택하여 아래로 스크롤하여 [Mapping Templates]을 설정합니다.
  1) “Request body passthrough”에서 “When there are no templates defined (recommended)”를 선택
  2) “Content-Type”으로 “image/jpeg”을 추가
  3) “image/jpeg”을 선택후 “Generate template”에서 “Method Request passthrough”를 선택후 저장



![image](https://user-images.githubusercontent.com/52392004/153761172-a1889b0a-c7fe-489d-a58e-3d8319871e19.png)





11. 생성한 API 를 배포해줘야 합니다. [Resources] 메뉴 상단의 [Actions] 버튼을 드롭다운 한 뒤 [Deploy API] 를 클릭합니다.


<img width="595" alt="image" src="https://user-images.githubusercontent.com/52392004/153714369-89c54cab-229f-47ec-bfe2-188bc83f586f.png">



12. [Deploy stage] 는 [New Stage] 를 선택하고 [Stage name*] 에는 dev 를 입력한 뒤 [Deploy] 버튼을 클릭합니다.



13. 아래와 같이 [Stages] - [dev]를 선택한후, invoke URL을 확인합니다.
https://xeps4yi0g0.execute-api.ap-northeast-2.amazonaws.com/dev


<img width="1404" alt="image" src="https://user-images.githubusercontent.com/52392004/153714415-4d6d19ef-f0e6-4c78-85ea-cb6620b19f18.png">


Invoke URL: https://viwb8crpob.execute-api.ap-northeast-2.amazonaws.com/dev



![image](https://user-images.githubusercontent.com/52392004/154483478-4be2072a-0ffb-4f95-a5cc-a85a455dd8a0.png)


14. [Logs/Tracing]의 [CloudWatch Settings]에서 [Enable CloudWatch Logs], [Log full requests/responses date], [Enable Detailed CloudWatch Metrics]를 모두 enable 하고 [Log level]을 “INFO”로 설정합니다.



![image](https://user-images.githubusercontent.com/52392004/154484341-58bd2475-23e8-4edf-98c1-bad3bcb1c002.png)




## Reference

https://aws.amazon.com/premiumsupport/knowledge-center/api-gateway-upload-image-s3/?nc1=h_ls

https://catalog.us-east-1.prod.workshops.aws/v2/workshops/05e3e1f9-5d5a-4cc5-9899-df114def68e7/ko-KR/lab2/step4


