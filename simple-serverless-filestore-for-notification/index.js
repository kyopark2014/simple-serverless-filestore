const AWS = require('aws-sdk');
const SNS = new AWS.SNS();

const CDN = "https://d3kcobap4v6czb.cloudfront.net/"; 

exports.handler = async (event, context) => {
    console.log('## EVENT: ' + JSON.stringify(event))

    let bucket = event.Records[0].s3.bucket.name;
    let key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
    const params = {
        Bucket: bucket,
        Key: key,
    };  

    var snsParams = {
        Subject: 'Get your file shared from Simple File Store as '+key,
        Message: 'Link: '+CDN+key,         
        TopicArn: 'arn:aws:sns:ap-northeast-2:677146750822:sns-simple-filestore'
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
    console.log('Info: ' + JSON.stringify(fileInfo)) 

    const response = {
        statusCode: 200,
        body: snsResult,
    };
    return response;
};
