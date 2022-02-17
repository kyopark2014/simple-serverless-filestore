# Simple File Sharing

## Lambda 설정 

1. AWS 콘솔  에서 AWS Lambda 서비스로 이동합니다.

https://ap-northeast-2.console.aws.amazon.com/lambda/home?region=ap-northeast-2#/functions

2. [Create function]의 [Basic information]에서 [Function name]은 “lambda-simple-filesharing-upload"으로 입력하고 [Runtime]으로 Noe.js를 선택합니다. 
 이후 아래오 스크롤 하여 [Create function]을 선택합니다. 
 

![image](https://user-images.githubusercontent.com/52392004/154479526-c60c476e-1b50-4143-992a-b7b9da3ab38c.png)


3. [Lambda] - [Funtions] - [lambda-simple-filesharing]에서 아래와 같이 [Configuration] - [Permissions]을 선택후, [Execution role]의 [Role name]을 아래 선택합니다. 본 예제에서는 아래와 같이 “lambda-simple-filesharing-upload-role-vf72b85o”을 선택합니다.

![image](https://user-images.githubusercontent.com/52392004/154479872-4393da97-7042-4289-80de-98cb17b6ee81.png)


4. 이때 IAM의 [Roles]로 이동하는데, Policy를 수정하기 위하여 아래와 같이 [Permissions policies]에 있는 “AWSLambdaBasicExecutionRole-c8b4ab9a-01a5-4ebf-9918-032f1f3c1f5a”을 선택합니다.

<img width="1155" alt="image" src="https://user-images.githubusercontent.com/52392004/154511646-da5fc924-0fba-4708-9359-422dc7dbc518.png">


5. [IAM]의 [Policies]로 이동하면, [Permissions]에서 [Edit policy]를 선택합니다. 

<img width="1163" alt="image" src="https://user-images.githubusercontent.com/52392004/154512067-72e9a2d8-197b-4009-91bf-6f222f8c161a.png">

6. [JSON]에서 아래의 퍼미션을 추가합니다. Permission은 향후 필요에 따라 원하는 범위로 조정할 수 있습니다.
```c
        {
            "Effect": "Allow",
            "Action": [
                "s3:Put*",
                "s3:Get*",
                "s3:List*"
            ],
            "Resource": "*"
        }
```

S3에 대한 Permission을 추가후 [Review policy]를 선택합니다.


<img width="965" alt="image" src="https://user-images.githubusercontent.com/52392004/154447955-8daa04fc-8824-42bf-996c-cc9b0c61a6af.png">


7. S3에 대한 Policy를 확인후 [Save changes] 선택하여 저장합니다.


8. API Gateway로 부터 받은 event에서 파일을 추출하여 S3에 저장하기 위한 코드를 다운로드 합니다.

아래와 같이 소스를 내려 받습니다.

```c
$ git clone https://github.com/kyopark2014/simple-serverless-filesharing-upload
```

해당 repository에는 이미 압축된 파일이 있지만, 추후 수정시 폴더로 이동하여 압축을 합니다. 이때 압축 명령어는 아래와 같습니다. 

```c
$ zip -r deploy.zip *
```


9. Lambda console에서 [Functions] - [lambda-simple-filesharing]을 선택한후, 코드를 업로드 합니다.

[Upload from] 버튼을 누른후에 아래처럼 [.zip file]을 선택합니다. 이후 다운로드한 파일에서 “deploy.zip” 을 선택합니다.


10. 업로드 후에는 자동으로 [Deploy]이 됩니다. 하지만 추후 console에서 바로 수정시에는 아래와 같이 [Deploy]를 선택하여 배포하여야 합니다. 

![image](https://user-images.githubusercontent.com/52392004/154476354-0960af0d-4467-4dc1-a9cb-2aae562d1720.png)

 
