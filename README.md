# Simple Serverless File Store: AWS 서버리스로 간단한 파일 서버 구현하기

본 문서에서는 Serverless architecture 기반의 파일공유 서비스를 소개하고자 합니다. 전체적인 Serverless Architecture는 아래와 같습니다.

<img width="894" alt="image" src="https://user-images.githubusercontent.com/52392004/154693997-e302b36f-8b84-4447-bcc6-907842cc5acd.png">

주요 사용 시나리오는 아래와 같습니다. 

1) 사용자가 업로드한 컨텐츠는 RESTful API를 통해 API Gateway를 통해 전송되는데 이때 보안을 위해 https를 이용해 전달됩니다. 이후, Lambda에 전달된 event에서 파일을 추출해서 S3에 저장하게 됩니다. 

2) 두번째 Lambda는 S3의 Put event notification을 받아서 trigger 되는데, CloudFront의 URL과 파일명을 가지고 파일 다운로드 URL 생성하여 SNS에 전달 합니다. 

3) SNS는 Lambda로 부터 전달된 SUBJECT와 URL을 포함한 Body를 email을 발송하게 됩니다. 수신자는 해당 URL을 별도 인증 절차 없이 사용 할 수 있으므로, 필요에 따라서 파일 공유등의 목적으로 활용 할 수 있습니다. 

간단하게 구현하여 사용할 수 있도록, 멀티 Account를 고려하지 않고, 고정비용을 줄이기 위하여 데이터베이스도 사용하지 않습니다. 

상세한 동작구성은 아래 Sequence Diagram을 참고 부탁드립니다.

![image](https://user-images.githubusercontent.com/52392004/156735672-e49e1f97-97a1-41f2-b7d4-00e733615f51.png)

문서 가독성을 위하여 아래와 같이 기능별 문서 파일에서 상세한 구현과 설정방법에 대해 설명 합니다. 

## Lambda-upload 구현

https://github.com/kyopark2014/simple-serverless-filestore/blob/main/docs/lambda-upload.md

## S3 구현

https://github.com/kyopark2014/simple-serverless-filestore/blob/main/docs/S3.md

## Lambda-notification 구현

https://github.com/kyopark2014/simple-serverless-filestore/blob/main/docs/lambda-notification.md

## API Gateway 구현 

https://github.com/kyopark2014/simple-serverless-filestore/blob/main/docs/api-gateway.md

## SNS 구현 

https://github.com/kyopark2014/simple-serverless-filestore/blob/main/docs/sns.md

## CloudFront 구현

https://github.com/kyopark2014/simple-serverless-filestore/blob/main/docs/cloudfront.md


## API Gateway 로그 설정 

https://github.com/kyopark2014/simple-serverless-filestore/blob/main/docs/api-gateway-log.md


상기와 같이 Lambda, S3, API Gateway를 모두 적절히 설치한후 아래와 같이 테스트를 할 수 있습니다. 

## 테스트 방법

### curl 을 활용한 바이너리 업로드 테스트

[curl 명령어의 예]

$ curl -i https://viwb8crpob.execute-api.ap-northeast-2.amazonaws.com/dev/upload -X POST --data-binary '@sample1.jpeg' -H 'Content-Type: image/jpeg' -H 'Content-Disposition: form-data; name="sample1"; filename="sample1.jpeg"'


curl 실행 결과는 아래와 같습니다. 


<img width="1213" alt="image" src="https://user-images.githubusercontent.com/52392004/154499486-c0c4f841-5636-4eaf-b91f-9f31ccd44ba1.png">


### Postman을 이용한 이미지 업로드 테스트

Content-Type 및 Content-Disposition을 설정합니다. 


<img width="1024" alt="image" src="https://user-images.githubusercontent.com/52392004/154497888-9b166748-f6ad-4a0e-9805-24e29fbfa811.png">

Body에 “binary” 형태로 이미지 파일을 전송합니다.


<img width="1007" alt="image" src="https://user-images.githubusercontent.com/52392004/154497991-5c9917f8-44ac-4370-bd79-7804daa64094.png">

Postman을 이용해 이미지 파일을 업로드시에 아래와 같이, 성공의 의미로 버켓이름, Key(파일이름), 컨텐츠 타입을 전달합니다. 

<img width="1013" alt="image" src="https://user-images.githubusercontent.com/52392004/154499778-f1ba0c5a-0d8f-4dea-90dd-a8881e8f236f.png">

### 본 과제에 필요한 Lambda upload와 notification 에 대한 코드 및 설명은 아래를 참조 바랍니다. 

#### [[Github: Lambda-upload]](https://github.com/kyopark2014/simple-serverless-filestore-for-upload)

https://github.com/kyopark2014/simple-serverless-filestore-for-upload

#### [[Github: Lambda-notification]](https://github.com/kyopark2014/simple-serverless-filestore-for-notification)

https://github.com/kyopark2014/simple-serverless-filestore-for-notification



## 실행결과 

파일이 업로드가 되면 S3에 저장하고, 다운로드가 가능하도록 CloudFront의 주소를 SNS를 통해 사용자에게 이메일로 전달하게 됩니다. 아래와 같이 SNS에 등록한 이메일로 컨텐츠 URL이 전달되면, 자신의 컨텐츠 저장소로 쓰거나 필요시 공유용 저장소로 사용할 수 있습니다. 

![image](https://user-images.githubusercontent.com/52392004/154707671-b74f296d-caea-43c8-882a-4f446302d65f.png)


