'use strict';
const users = require("../data/users");

module.exports.users = async event => {
    const { id } = event.pathParameters;
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Go Serverless v1.0! Your function executed successfully!",
                users: users.users.filter((u) => u.id === parseInt(id)),
            }),
    };

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
