// myFirstLambdaFunction.js
const myFirstLambdaFunction = async (event) => {
  const name = event.queryStringParameters?.name || 'World';
  return {
      statusCode: 200,
      body: JSON.stringify(`Hello, ${name}!`),
  };
};

module.exports = { myFirstLambdaFunction };
