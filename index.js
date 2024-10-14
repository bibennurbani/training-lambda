const { myFirstLambdaFunction } = require('./myFirstLambdaFunction');

exports.handler = async (event) => {
    return await myFirstLambdaFunction(event);
};
