const request = require('request');

let process_obj = {};
process_obj.inside_njs = {};

process_obj.get_instance = function(inside_njs){
    process_obj.inside_njs = inside_njs;
};

process_obj.get_respone = function(response_obj){
    process_obj.response = response_obj;
};

process_obj.run = function(){

    // REQUEST #1
    process_obj.inside_njs.service_message1 = {};
    process_obj.inside_njs.service_message1.request = { message_id: 11, request: 'init' };
    process_obj.inside_njs.process.response.debug_data += '<h2>Service Message Request #1</h2>';
    process_obj.inside_njs.process.response.debug_data += '<pre>'+JSON.stringify(process_obj.inside_njs.service_message1.request, null, 2)+'</pre>';

    request.post('http://127.0.0.1:5000', { json: process_obj.inside_njs.service_message1.request }, process_obj.step_1);

};

process_obj.step_1 = function(error, response, body){

    // if (!error && response.statusCode == 200) { console.log(body);}

    // RESPONSE #1
    process_obj.inside_njs.service_message1.response = response.toJSON();
    process_obj.inside_njs.process.response.debug_data += '<h2>Service Message Response #1</h2>';
    process_obj.inside_njs.process.response.debug_data += '<pre>'+JSON.stringify(process_obj.inside_njs.service_message1.response, null, 2)+'</pre>';

    // REQUEST #2
    process_obj.inside_njs.service_message2 = {};
    process_obj.inside_njs.service_message2.request = { message_id: 22, request: 'send' };
    process_obj.inside_njs.process.response.debug_data += '<h2>Service Message Request #2</h2>';
    process_obj.inside_njs.process.response.debug_data += '<pre>'+JSON.stringify(process_obj.inside_njs.service_message2.request, null, 2)+'</pre>';

    request.post('http://127.0.0.1:5001', { json: process_obj.inside_njs.service_message2.request }, process_obj.step_2);
};

process_obj.step_2 = function(error, response, body){

    // if (!error && response.statusCode == 200) { console.log(body);}

    process_obj.inside_njs.service_message2.response = response.toJSON();
    process_obj.inside_njs.process.response.debug_data += '<h2>Service Message Response #2</h2>';
    process_obj.inside_njs.process.response.debug_data += '<pre>'+JSON.stringify(process_obj.inside_njs.service_message2.response, null, 2)+'</pre>';

    process_obj.finish();
};

process_obj.finish = function(){
    process_obj.inside_njs.debug_process_finish();
    process_obj.response.send(process_obj.inside_njs.process.response.debug_data);
};

module.exports = process_obj;