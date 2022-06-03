let inside_router = {};

inside_router.request_json = {};

inside_router.route = function(req_obj){
    inside_router.request_json = req_obj;

    let controller = {};

    if (typeof (inside_router.request_json.a) == 'undefined') {
        controller = require("./../app/controllers/error404.js");
    } else {
        if (inside_router.request_json.a == 'debug') {
            controller = require("./../app/controllers/debug.js");
        }
        else if (inside_router.request_json.a == 'test') {
            controller = require("./../app/controllers/test.js");
        } else {
            controller = require("./../app/controllers/error404.js");
        }
    }
    return controller;
};

module.exports = inside_router;