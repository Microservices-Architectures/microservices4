const express = require('express');

const http = require('http');
const app   = express();

//
// Throws an error if the any required environment variables are missing.
//
if(!process.env.PORT) {
    throw new Error("Please specify the port number for the http server with the environment variable PORT.");
}

if(!process.env.VIDEO_STORAGE_HOST) {
    throw new Error("Please specify the host name for the video storage microservice in variable VIDEO_STORAGE_HOST.");
}

if(!process.env.VIDEO_STORAGE_PORT) {
    throw new Error("Please specify the port number for the video storage microservice in variable VIDEO_STORAGE_PORT.");
}


//
// Extracts environment variables to globals for convenience.
//