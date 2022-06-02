const express = require('express');
const request = require('request');
const process = require('process');
const app = express();

let inside_njs = require("./inside_njs/inside_njs.js");

app.get('/', (req,res)=> {

    inside_njs.process.start();
    inside_njs.process.request.json = req.query;
    inside_njs.debug_main_request();

    if (true) {

        // Create Process
        // Find Process Logic
        // Import Service Object

        let process_obj = require("./inside_njs/process_obj.js");
        process_obj.get_instance(inside_njs);
        process_obj.get_respone(res);
        process_obj.run();
    }
});

app.listen(3000);