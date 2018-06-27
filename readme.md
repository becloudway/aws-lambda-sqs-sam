# SQS - Lambda integration with Serverless Application Model (SAM)

Simple working version of the new AWS Lambda SQS event source integration. 
The SAM template transformation is verified to work in eu-west-1 region.

## How to use
Zip the index.js file or run npm run package in the lambda-hello-logger folder.
Upload the zipfile to an S3 bucket of choice.

Create a new cloudformation stack using the lambda-sqs-sam-template.yml file.

When you send a message to the queue you should find a comparable event to the one below in the Cloudwatch Logs stream for the Lambda function:
```json
{
    "Records": [
        {
            "messageId": "...",
            "receiptHandle": "...",
            "body": "hi",
            "attributes": {
                "ApproximateReceiveCount": "1",
                "SentTimestamp": "1530136437293",
                "SenderId": "IUOAJLUR7717UG3QPIV4D6:user",
                "ApproximateFirstReceiveTimestamp": "1530136437328"
            },
            "messageAttributes": {},
            "md5OfBody": "...",
            "eventSource": "aws:sqs",
            "eventSourceARN": "arn:aws:sqs:eu-west-1:accountid:queue",
            "awsRegion": "eu-west-1"
        }
    ]
}
```
