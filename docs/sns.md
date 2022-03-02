# Amazon SNS 구성

AWS Lambda 가 이벤트를 처리한 결과를 email 로 전송할 때 사용할 Amazon SNS 를 구성하고자 합니다.

1. AWS 콘솔  에서 Amazon SNS 서비스로 이동합니다. 리전은 서울(ap-northeast-2)을 사용합니다.
https://ap-northeast-2.console.aws.amazon.com/sns/v3/home?region=ap-northeast-2#/homepage

2. SNS console - [Topics]에서 아래와 같이 [Standard]을 선택하고, [Name]은 “sns-simple-filestore”을 입력합니다. 스크롤을 내려서 [Create topic] 을 선택하여 topic을 생성합니다. 



![image](https://user-images.githubusercontent.com/52392004/154602012-298f3d76-6420-44d6-9b2a-56f4243057a3.png)


3. [Amazon SNS] - [Topics] - [sns-simple-filestore] - [Subscription]에서 [Create subscription]을 선택합니다. 



<img width="688" alt="image" src="https://user-images.githubusercontent.com/52392004/154602161-d1d1b971-2f74-4f4b-bf94-224093a1b801.png">

4. [Portocol]은 “Email”을 선택하고, Endpoint로 이메일 주소를 입력 합니다. [Create subscription]을 선택하여 subscription을 마무리 합니다. 



<img width="773" alt="image" src="https://user-images.githubusercontent.com/52392004/154602616-9e721b6b-1b35-4c57-882c-e402d9b4afc9.png">


5. 입력한 메일주소로 “AWS Notification Subscription Confirmation” 메일이 오면 “Confirm subscription” 링크를 선택하여 Confirm 합니다. 



