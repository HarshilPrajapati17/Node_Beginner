var exec = require("child_process").exec;

function start() {
    console.log("Request handler 'start' was called.");

    exec("ls -lah", function (error, stdout, stderr) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
        });
}

function upload() {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Upload");
    response.end();
}
    
exports.start = start;
exports.upload = upload;