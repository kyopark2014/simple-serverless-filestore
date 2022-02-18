
# API Gateway Log 설정 

## Set up the IAM Role

1. IAM console에 접속 

https://console.aws.amazon.com/iamv2/home#/roles

<img width="274" alt="image" src="https://user-images.githubusercontent.com/52392004/153874859-dcbc126c-5ccf-4932-814e-c58c191cb04c.png">


2. [Create roles]를 선택

<img width="1048" alt="image" src="https://user-images.githubusercontent.com/52392004/153875322-65322181-93cc-4aed-b58b-8e361248d79c.png">


3. [Use case]에서 “API Gateway”를 선택하고 “Allows API Gateway to push logs to CloudWatch Logs”를 enable 한후에 [Next]를 선택한다.

<img width="1011" alt="image" src="https://user-images.githubusercontent.com/52392004/153875821-1d9a5b5f-29f3-464f-9d96-f31c4214002e.png">


4. [Add permissions]에서 AmazonAPIGatewayPushToCloudWatchLogs를 확인하고 [Next]를 선택한다.

<img width="1026" alt="image" src="https://user-images.githubusercontent.com/52392004/153876353-5a90cb10-7826-4378-a5f6-a8655eef9fd8.png">


5. [Role details]에서 [Role name]으로 “api-gateway-logs-seoul”을 입력하고 스크롤하여 [Create role]을 선택한다.  

<img width="766" alt="image" src="https://user-images.githubusercontent.com/52392004/153876962-7a68dc01-887a-45e8-b36b-47dd09df59ec.png">

6. [IAM] - [Roles] 에서 “api-gateway-logs-seoul”을 검색하여, 아래의 ARN 을 확인한다.
    예) arn:aws:iam::<account id>:role/api-gateway-logs-seoul

<img width="875" alt="image" src="https://user-images.githubusercontent.com/52392004/153879184-89413ac2-a952-43bd-8051-2982fae7ed4e.png">


## Configure the IAM Role in API Gateway
  
1. API Gateway의 console로 이동한다.

  https://ap-northeast-2.console.aws.amazon.com/apigateway/main/apis?region=ap-northeast-2


2. 왼쪽 메뉴 마지막의 [Settings]를 선택후, 아래와 같이 CloudWatch log role ARN을 입력하고 [Save]를 선택한다.

<img width="868" alt="image" src="https://user-images.githubusercontent.com/52392004/153880496-a00457af-fca0-4576-be02-1af2454124c9.png">


  
## Configure logging in each API

1. [API:api-filesharing] - [Stages] - [dev] - [dev Stage Editor] - [Logs/Tracing]에서 [Enable CloudWatch Logs]를 enable, [log lever]은 INFO로, [Log full requests/responses data], [Enable Detailed CloudWatch Metrics]을 모두 enable 한다.

![image](https://user-images.githubusercontent.com/52392004/153757488-901adfdc-dd45-4ebb-833d-7dd4a50666e2.png)


  
## Trouble shooting

[Save Changes]를 선택했는데 아래와 같이 “CloudWatch Logs role ARN must be set in account settings to enable logging” 에러가 발생하는 경우는 상기와 같이 Roles의 API Gateway log에 대한 ARN이 [Settings]에 잘 설정되어 있는지 확인한다.  


<img width="558" alt="image" src="https://user-images.githubusercontent.com/52392004/153872550-4ab66c4e-bf76-4814-ae2d-0878de650f37.png">



#### Reference

https://aws.amazon.com/premiumsupport/knowledge-center/api-gateway-cloudwatch-logs/?nc1=h_ls

https://kennbrodhagen.net/2016/07/23/how-to-enable-logging-for-api-gateway/

