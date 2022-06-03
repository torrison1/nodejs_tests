let inside_njs = {};

inside_njs.process = {};

inside_njs.get_microtime = function(){
    let hrTime = process.hrtime(); let now = hrTime[0] + hrTime[1] / 1000000000;
    return now;
};

inside_njs.json_debug_toHTML = function(obj){
    return '<pre>'+JSON.stringify(obj, null, 2)+'</pre>';
};

module.exports = inside_njs;