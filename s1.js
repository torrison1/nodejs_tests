const express = require('express');
const request = require('request');
const app = express();

app.use(express.json());

app.post('/', function(request, response){
    response.setHeader('Content-Type', 'application/json');
    let response_obj = { message_id: 11, response: 'success' };
    response.end(JSON.stringify(response_obj, null, 3));
});

app.listen(5000);