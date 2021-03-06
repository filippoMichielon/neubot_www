// Adapted by Simone Basso from the node.js documentation
/*jslint node: true */

"use strict";

var http = require("http");

http.createServer(function (request, response) {
	console.info("Request Method: %s", request.method);
	console.info("Request URI: %s", request.url);
	for (var key in request.headers) {
		console.info("Header: %s => %s", key, request.headers[key]);
	}
        setTimeout(function () {
	    response.writeHead(200, {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            });
            response.end("{}\n");
        }, 1000);

}).listen(9774, "127.0.0.1", function(){
	console.info('Server running at http://127.0.0.1:9774/');
});

