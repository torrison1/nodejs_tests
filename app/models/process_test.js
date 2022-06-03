const request = require('request');

let process_test = {};

process_test.init = function(inside_server, inside_process){
    process_test.inside_server = inside_server;
    process_test.inside_process = inside_process;
    process_test.inside_njs = inside_server.inside_njs;

    process_test.debug_data = '';
};

process_test.run = function(){

    // REQUEST #1
    process_test.service_message1 = {};
    process_test.service_message1.request = { message_id: 11, request: 'init' };
    process_test.debug_data += '<h2>Service Message Request #1</h2>';
    process_test.debug_data += '<pre>'+JSON.stringify(process_test.service_message1.request, null, 2)+'</pre>';

    request.post('http://127.0.0.1:5000', { json: process_test.service_message1.request }, process_test.step_1);

};

process_test.step_1 = function(error, response, body){

    if (error || response.statusCode != 200) {
        process_test.debug_data += '<h2>Error: '+error+'</h2>';
        process_test.finish();
    } else {
        // RESPONSE #1
        process_test.service_message1.response = response.toJSON();
        process_test.debug_data += '<h2>Service Message Response #1</h2>';
        process_test.debug_data += '<pre>'+JSON.stringify(process_test.service_message1.response, null, 2)+'</pre>';

        // REQUEST #2
        process_test.service_message2 = {};
        process_test.service_message2.request = { message_id: 22, request: 'send' };
        process_test.debug_data += '<h2>Service Message Request #2</h2>';
        process_test.debug_data += '<pre>'+JSON.stringify(process_test.service_message2.request, null, 2)+'</pre>';

        request.post('http://127.0.0.1:5001', { json: process_test.service_message2.request }, process_test.step_2);
    }
};

process_test.step_2 = function(error, response, body){

    if (error || response.statusCode != 200) {
        process_test.debug_data += '<h2>Error: '+error+'</h2>';
        process_test.finish();
    } else {

        process_test.service_message2.response = response.toJSON();
        process_test.debug_data += '<h2>Service Message Response #2</h2>';
        process_test.debug_data += '<pre>' + JSON.stringify(process_test.service_message2.response, null, 2) + '</pre>';

        process_test.finish();
    }
};

process_test.finish = function(){
    process_test.inside_server.end_process(process_test.inside_process);
    process_test.inside_process.response.send(process_test.debug_data);
};

module.exports = process_test;