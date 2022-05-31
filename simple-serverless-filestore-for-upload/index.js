const aws = require('aws-sdk');
const cd = require('content-disposition');
const {v4: uuidv4} = require('uuid');

const s3 = new aws.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event, context) => {
    console.log('## ENVIRONMENT VARIABLES: ' + JSON.stringify(process.env))
    // console.log('## EVENT: ' + JSON.stringify(event))
    
    const body = Buffer.from(event["body-json"], "base64");
    console.log('## EVENT: ' + JSON.stringify(event.params))
    console.log('## EVENT: ' + JSON.stringify(event.context))

    const uuid = uuidv4();
    console.log('### start upload: ' + uuid);

    var contentType;
    if(event.params.header['Content-Type']) {
        contentType = event.params.header["Content-Type"];
    } 
    else if(event.params.header['content-type']) {
        contentType = event.params.header["content-type"];
    }
    console.log('contentType = '+contentType); 

    var contentDisposition;
    if(event.params.header['Content-Disposition']) {
        contentDisposition = event.params.header["Content-Disposition"];  
    } 
    else if(event.params.header['content-disposition']) {
        contentDisposition = event.params.header["content-disposition"];  
    }
    console.log('disposition = '+contentDisposition);

    var filename = "";
    if(contentDisposition) {
        filename = cd.parse(contentDisposition).parameters.filename;
    }
    else {
      var ext;
      if(contentType == 'image/jpeg') ext = '.jpeg';
      else if(contentType == 'image/jpg') ext = '.jpg';
      else if(contentType == 'image/png') ext = '.png';
      else ext = '.jpeg';  // default

      filename = uuid+ext;
    }

    const bucket = 's3-simple-filestore';
    try {
        const destparams = {
            Bucket: bucket, 
            Key: filename,
            Body: body,
            ContentType: contentType
        };
        const {putResult} = await s3.putObject(destparams).promise(); 

        console.log('### finish upload: ' + uuid);
    } catch (error) {
        console.log(error);
        return;
    } 
    
    const fileInfo = {
        Bucket: bucket,
        Name: filename,
        ContentType: contentType
    }; 
    console.log('file info: ' + JSON.stringify(fileInfo)) 

    const response = {
        statusCode: 200,
        body: JSON.stringify(fileInfo),
    };
    return response;
};
