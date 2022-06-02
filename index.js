const express = require('express');
const request = require('request');
const app = express();

app.get('/', (req,res)=> {

    let request_message = { message_id: 11, request: 'init' };

    request.post(
        'http://127.0.0.1:5000',
        { json: request_message },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // console.log(body);
            }
            // console.log(body);
            // console.log(body);
            // console.log(response.toJSON());

            let message_obj = response.toJSON();
            message_obj.request_message = request_message;

            let view = '<pre>'+JSON.stringify(message_obj, null, 2)+'</pre>';

            res.send(view);

        }
    );

});

app.listen(3000);

