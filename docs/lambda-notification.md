# Simple File Store

## Lambda Notification 설정

1. Lambda console에서 [Functions] - [Create function]을 선택하여, [Basic information]에서 [Function name]으로 아래와 같이 “lambda-simple-filesharing-notification”을 입력하고, [Create function]을 선택하여 생성합니다. 

https://ap-northeast-2.console.aws.amazon.com/lambda/home?region=ap-northeast-2#/create/function


![image](https://user-images.githubusercontent.com/52392004/154589603-77f6bf92-74a9-413c-a3dd-31d30e115e4b.png)


2. [AWS Lambda] - [Functions] - [lambda-simple-filesharing-notification]에서 [Configuration] - [Permission]을 선택한후, [Execution role]에서 “lambda-simple-filesharing-notification-role-k327f3nl”을 선택하여 진입합니다. 


![image](https://user-images.githubusercontent.com/52392004/154695304-4848328c-3693-4f8d-b9a2-fa77d1285f42.png)

3. [IAM] - [Roles]로 화면이 전환된 후에, 아래와 같이 [Permissions policies]에서 “AWSLambdaBasicExecutionRole-319f6640-584b-4939-a7fc-b0fc2ef6fd76”을 선택합니다. 


![image](https://user-images.githubusercontent.com/52392004/154695888-9fb261c7-2684-4e81-808a-b7b03ee63a29.png)

4. [IAM] - [Policies]로 전환된 후, 새로 생성한 Lambda의 Policy를 수정하기 위하여 아래와 같이 [Ediit policy]를 눌러서, 수정화면으로 이동합니다. 이후 아래의 Permission을 삽입합니다. 여기서는 SNS 대부분의 Action을 넣었는데, 용도에 맞춰서 필요한 퍼미션만을 사용하는것이 보안면에서 좋습니다. 

```c
		{
            "Effect": "Allow",
            "Action": [
                "sns:Publish",
                "sns:Subscribe",
                "sns:CreateTopic",
                "sns:GetTopicAttributes",
                "sns:SetTopicAttributes",
                "sns:TagResource",
                "sns:UntagResource",
                "sns:ListTagsForResource",
                "sns:ListSubscriptionsByTopic"
            ],
            "Resource": [
                "arn:aws:sns:ap-northeast-2:677146750822:sns-simple-filesharing"
			]
		}
```        


![image](https://user-images.githubusercontent.com/52392004/154697187-ca217635-cb7b-4ddf-93e0-f4125c96b044.png)


5. AWS Lambda console로 이동하여, [Functions] - [lambda-simple-filesharing-notification]의 [Code]에서 [Upload form]을 선택하여, “deploy.zip” 파일을 업로드 합니다. 업로드후 자동으로 Deply 되지만, 코드 수정시에는 [Deploy] 버튼을 눌러서 수동으로 Deploy 하여야 합니다.  관련된 코드는 아래와 같이 clone 하여 사용 합니다. 


<img width="828" alt="image" src="https://user-images.githubusercontent.com/52392004/154697644-0db766b3-176d-44c3-955d-f44b7196a5d2.png">


#### 소스 다운로드 방법

```c
$ git clone https://github.com/kyopark2014/simple-serverless-filesharing-notification 

```

