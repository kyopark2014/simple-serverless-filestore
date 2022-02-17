# Simple File Sharing

## CloudFront 설정 

CloudFront는 AWS의 CDN 서비스로 Simple File Sharing에서 업로드한 파일을 외부에 공유하기 위해 사용하고자 합니다.

1. CloudFront console의 [Distribution]에 접속하여 [Create distributions]를 선택 합니다. 

https://console.aws.amazon.com/cloudfront/v3/home?region=ap-northeast-2#/distributions


![image](https://user-images.githubusercontent.com/52392004/154585168-921a793f-8b20-4099-97bd-f27d2386de2b.png)


2. [Create distribution]에서 [Origin domain]을 선택하면 기존에 생성한 S3의 리스트가 보여집니다. 기 생성한 simple-file-store를 선택합니다. 또한, 보안을 위해 아래와 같이 [S3 bucket access]를 “Don't use OAI (bucket must allow public access)”에서 “Yes use OAI (bucket can restrict access to only CloudFront)”로 변경합니다. 



![image](https://user-images.githubusercontent.com/52392004/154585646-ec2031c8-b9ee-4c62-b00f-8c7d3d72b4a7.png)

2. 아래로 스크롤하여 [Viewer]에서 보안을 위하여 “HTTP and HTTPS” 에서 “Redirect HTTP to HTTP”을 선택합니다. 

![image](https://user-images.githubusercontent.com/52392004/154588875-f1092ef8-00ea-4f8f-876e-49f13f2d5a76.png)

3. 나머지 설정은 default로 유지하고 [Create distribution]을 선택하여 Distribution을 등록합니다. 이때 생성을 위해 수분에서 수십분 시간이 소요되는데 아래와 같이 Status에서 “Enabled" 가 되어야 사용할 수 있습니다. 또한, 아래와 같이 접속할 도메인의 주소를 “d1jriun510dhsq.cloudfront.net” 와 같이 확인 할 수 있습니다. 


![image](https://user-images.githubusercontent.com/52392004/154586148-4d39628a-221a-45fc-aa79-d199f57ccd1d.png)

4. 동작을 확인을 위해 아래와 같이 S3 bucket에 “sample1.jpeg”라는 파일을 업로드 합니다. 



![image](https://user-images.githubusercontent.com/52392004/154586665-85ef0d73-e0aa-4a99-aa57-9fcc3a986512.png)

5. 브라우저를 통해 아래 URL을 접속하여 해당 컨텐츠가 정상적으로 보여지는지 확인합니다. 

URL 예제: https://d1jriun510dhsq.cloudfront.net/sample1.jpeg



### Troubleshooting

상기 url로 파일이 로드되지 않는 경우에 [CloudFront] - [Security]에서 아래와 같이 Origin access Identities]에서 ID를 확인합니다. 

![image](https://user-images.githubusercontent.com/52392004/154588098-c68af918-4a60-48d3-bca4-2062d2d34796.png)


이후, [Amazon S3] - [simple-file-store] - [Permission]을 선택하여 아래로 스크롤하여 [Bucket policy]가 아래와 같이 생성되어 있는지 확인합니다. 이 policy는 CloudFront 에서 자동으로 생성되나, 만약 생성되어 있지 않거나 정보가 다르다면 아래와 같이 [Edit]를 선택하여 입력합니다. 


![image](https://user-images.githubusercontent.com/52392004/154582103-789a46f1-56c8-4cac-a08f-fd5b244d192b.png)
