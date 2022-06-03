let service = {};

service.init = function(inside_process, inside_server){

    let process_obj = require("./../models/process_test.js");
    process_obj.init(inside_server, inside_process);
    process_obj.run();
};

module.exports = service;