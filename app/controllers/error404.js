let service = {};

service.init = function(inside_process, inside_server){
    inside_server.end_process(inside_process);
    inside_process.response.send('Error 404 :)');
};

module.exports = service;