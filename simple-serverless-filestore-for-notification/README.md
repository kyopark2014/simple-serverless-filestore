# simple-serverless-filestore-for-notification

사용자 컨텐츠가 S3에 업로드 되면, Notification Lambda는 CloudFront URL을 생성하여, 메일내용과 함께 SNS를 통해 전달한다. 


#### S3에 파일이 저장되면서 발생한 Notification의 처리 

아래와 같이 수신된 event로 부터 bucket 주소와 key (파일이름)을 읽어온다. 

```java
  let bucket = event.Records[0].s3.bucket.name;
    let key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const params = {
        Bucket: bucket,
        Key: key,
    };  
```

#### SNS를 통해 메일로 컨텐츠 정보 전달하기 

아래와 같이 컨텐츠에 대한 정보인 Subject, Message, TopicArn을 아래와 같이 설정한다. 발신 메시지는 SNS로 Publish를 통해 전달되고 아래와 같이 파일 정보를 나눌 수 있습니다. 

```java
    var snsParams = {
        Subject: 'Get your file shared from Simple File Store as '+key,
        Message: 'Link: '+CDN+key,         
        TopicArn: 'arn:aws:sns:ap-northeast-2:********:sns-simple-filestore'
    }; 
    
    let snsResult;
    try {
        snsResult = await SNS.publish(snsParams).promise();
        console.log('snsResult:', snsResult);
    } catch (err) {
        console.log(err);
    } 

    const fileInfo = {
        Bucket: bucket,
        Name: key,
        Size: event.Records[0].s3.object.size,
        Url: CDN+key
    }; 
    
    const response = {
        statusCode: 200,
        body: snsResult,
    };
    return response;
```
