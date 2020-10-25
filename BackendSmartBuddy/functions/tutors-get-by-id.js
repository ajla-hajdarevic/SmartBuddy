'use strict';
const tutors = require("../data/tutors");

module.exports.tutors = async event => {
    const { id } = event.pathParameters;
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Go Serverless v1.0! Your function executed successfully!",
                tutors: tutors.tutors.filter((t) => t.id === parseInt(id)),
            }),
    };ç

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
