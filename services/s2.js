const express = require('express');
const app = express();

app.use(express.json());

app.post('/', function(request, response){
    response.setHeader('Content-Type', 'application/json');
    let response_obj = { message_id: 22, response: 'warning' };
    response.end(JSON.stringify(response_obj, null, 3));
});

app.listen(5001);