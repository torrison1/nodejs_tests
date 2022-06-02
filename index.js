const express = require('express');
const request = require('request')
const process = require('process');
const app = express();

app.get('/', (req,res)=> {

    // ===================================== Main Request ===================================================
    let process_request = {};
    process_request.json = {};
    process_request.debug_data = '';

    let hrTime = process.hrtime(); let now = hrTime[0] + hrTime[1] / 1000000000;
    process_request.start_time = now;

    process_request.json = req.query;
    process_request.debug_data += '<pre>'+JSON.stringify(process_request.json, null, 2)+'</pre>';

    // ===================================== Main Response ===================================================
    let process_response = {};
    process_response.type = 'html';
    process_response.debug_data = '';
    process_response.data = '';
    process_response.debug_data += '<h2>Main Process Request</h2>';
    process_response.debug_data += process_request.debug_data;

    // ======================================================================================================

    if (true) {

        // Create Process
        // Find Process Logic
        // Import Service Object
        // Send Message to Other Service
        let service_message = {};
        service_message.request = { message_id: 11, request: 'init' };

        process_response.debug_data += '<h2>Service Message Request</h2>';
        process_response.debug_data += '<pre>'+JSON.stringify(service_message.request, null, 2)+'</pre>';

        request.post(
            'http://127.0.0.1:5000',
            { json: service_message.request },
            function (error, response, body) {

                if (!error && response.statusCode == 200) {
                    // console.log(body);
                }
                // console.log(body);
                // console.log(body);
                // console.log(response.toJSON());

                service_message.response = response.toJSON();

                process_response.debug_data += '<h2>Service Message Response</h2>';
                process_response.debug_data += '<pre>'+JSON.stringify(service_message.response, null, 2)+'</pre>';

                let hrTime = process.hrtime(); let now = hrTime[0] + hrTime[1] / 1000000000;
                process_response.end_time = now;

                process_response.process_time = process_response.end_time - process_request.start_time;

                process_response.debug_data += '<h2>Time</h2>';
                process_response.debug_data += '<b>Start:</b>'+process_request.start_time;
                process_response.debug_data += '<br><b>Finish:</b>'+process_response.end_time;
                process_response.debug_data += '<br><b>Diff:</b>'+process_response.process_time;

                // ======================================
                // Back Debug Data
                res.send(process_response.debug_data);
                // ======================================

            }
        );
    }



});

app.listen(3000);

