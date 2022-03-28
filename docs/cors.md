## Browser에서 업로드 지원을 위한 CORS 구현

1) javascript를 이용해 API Gateway를 통해 파일을 전송시 CORS를 설정하여야 합니다. [API Gateway] - [upload - Post]에서 [Actions]을 선택하여 [Enable CORS]를 선택합니다. 

![noname](https://user-images.githubusercontent.com/52392004/160276329-0becf4f4-e45b-4dae-822d-131df1c6175b.png)


2) [Enable CORS] 선택후 [Access-Control-Allow-Headers]에 아래와 같이, "Content-Disposition"을 추가합니다.  

![noname](https://user-images.githubusercontent.com/52392004/160276369-dd6f286e-0eaf-404a-92f1-95e3d54c7100.png)

3) 이제 [Enable CORS and replace existing CORS headers]를 선택합니다. 

![image](https://user-images.githubusercontent.com/52392004/160275602-6d869d62-680e-4e08-aabe-1acab20c332c.png)

4) 다시 [/upload]를 선택하면 아래와 같이 "OPTIONS" method가 자동생성되는데, 이때 [Integration Request]는 "MOCK" type으로 생성되는것을 알 수 있습니다. 

![image](https://user-images.githubusercontent.com/52392004/160275650-f78342c8-9185-4968-b7d7-43793ac74905.png)

[Integration Request]를 선택하여 진입후 [Mapping Templates]를 선택하여 "When there are no template defined"를 선택후, "Content-type"으로 "image/jpeg"를 추가하고, "Generate template"에는 "{"statusCode":200}을 입력하고 아래로 스크롤하여 [Save]를 선택합니다. 

![noname](https://user-images.githubusercontent.com/52392004/160275920-86f5618d-e2ee-4929-a41a-5275b7422019.png)

5) 마찬가지 방법으로 "application/octet-stream", "image/jpg", "image/png"등을 추가합니다.

6) 설정이 끝나면 테스트 전에 아래처럼 Deploy를 하여야 합니다.

![noname](https://user-images.githubusercontent.com/52392004/160276075-463b3183-e6f2-4d43-a346-984c0558b1f8.png)



