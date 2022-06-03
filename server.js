const express = require('express');
const request = require('request');
const process = require('process');
const app = express();

let inside_server = require("./inside_njs/inside_server.js");
let inside_router = require("./inside_njs/inside_router.js");

app.get('/', (req,res)=> {

    let inside_process = inside_server.new_process(req, res);

    let controller = inside_router.route(inside_process.data.request_obj);
    controller.init(inside_process, inside_server);

});

app.listen(3000);