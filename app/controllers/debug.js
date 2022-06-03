let debug = {};

debug.inside_process = {};
debug.inside_server = {};

debug.init = function(inside_process, inside_server){
    debug.inside_process = inside_process;
    debug.inside_server = inside_server;
    console.log('Debug init...');
    let debugHTML = debug.inside_server.inside_njs.json_debug_toHTML(inside_process.data);
    debugHTML += '<h3>Server Debug</h3>';
    debugHTML += debug.inside_server.inside_njs.json_debug_toHTML(inside_server.processor.process_list);
    inside_server.end_process(inside_process);
    inside_process.response.send(debugHTML);

};

module.exports = debug;