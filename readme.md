Here's the command for deploy our lambda aws.

npm install


zip -r my-lambda.zip .


aws lambda create-function --function-name myFirstLambdaFunction \
--zip-file fileb://my-lambda.zip --handler index.handler --runtime nodejs18.x \
--role arn:aws:iam::<your-account-id>:role/<your-lambda-execution-role>
