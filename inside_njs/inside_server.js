let inside_server = {};

inside_server.processor = {};
inside_server.processor.id_increment = 0;
inside_server.processor.process_list = {};
inside_server.debug_log = '';


inside_server.inside_njs = require("./inside_njs.js");

inside_server.new_process = function(req, res){

    let process = {};
    process.data = {};

    process.request = req;
    process.response = res;

    process.data.request_obj = req.query;
    process.data.process_id = inside_server.processor.id_increment++;
    process.data.start_time = inside_server.inside_njs.get_microtime();

    inside_server.processor.process_list[process.data.process_id] = process.data;

    return process;
};

inside_server.end_process = function(process) {
    process.data.end_time = inside_server.inside_njs.get_microtime();
    process.data.process_time = process.data.end_time - process.data.start_time;
    return true;
};

inside_server.debug_all = function(){
    inside_server.debug_log += '<h3>Server</h3>';
    inside_server.debug_log += inside_server.inside_njs.json_debug_toHTML(inside_server);
};

module.exports = inside_server;