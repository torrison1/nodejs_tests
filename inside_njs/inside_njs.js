let inside_njs = {};

inside_njs.process = {};

inside_njs.get_microtime = function(){
    let hrTime = process.hrtime(); let now = hrTime[0] + hrTime[1] / 1000000000;
    return now;
};

inside_njs.process.start = function(){
    inside_njs.process.request = {};
    inside_njs.process.request.json = {};
    inside_njs.process.request.debug_data = '';
    inside_njs.process.request.start_time = inside_njs.get_microtime();

    inside_njs.process.response = {};
    inside_njs.process.response.type = 'html';
    inside_njs.process.response.debug_data = '';
    inside_njs.process.response.data = '';
};

inside_njs.debug_main_request = function(){
    inside_njs.process.request.debug_data += '<pre>'+JSON.stringify(inside_njs.process.request.json, null, 2)+'</pre>';
    inside_njs.process.response.debug_data += '<h2>Main Process Request</h2>';
    inside_njs.process.response.debug_data += inside_njs.process.request.debug_data;
};

inside_njs.debug_process_finish  = function(){
    inside_njs.process.response.end_time = inside_njs.get_microtime();
    inside_njs.process.response.process_time = inside_njs.process.response.end_time - inside_njs.process.request.start_time;
    inside_njs.process.response.debug_data += '<h2>Time</h2>';
    inside_njs.process.response.debug_data += '<b>Start:</b>'+inside_njs.process.request.start_time;
    inside_njs.process.response.debug_data += '<br><b>Finish:</b>'+inside_njs.process.response.end_time;
    inside_njs.process.response.debug_data += '<br><b>Diff:</b>'+inside_njs.process.response.process_time;
};
module.exports = inside_njs;