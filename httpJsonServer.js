var http = require('http');
var url = require('url');
//var JSON = require('json');


var server = http.createServer(function(request,response){
	var UrlObj = url.parse(request.url, true);
	var time = new Date(UrlObj.query.iso);
	//var hour,minute,second = time.toISOString();

	if(/^\/api\/parsetime/.test(request.url)){
		var result = {hour:time.getHours(),
				  minute:time.getMinutes(),
				  second:time.getSeconds()
			}
	} else if (/^\/api\/unixtime/.test(request.url)){
		var result = {unixtime: time.getTime()}
	}

	response.writeHead(200, { 'Content-Type': 'application/json' });
	response.end(JSON.stringify(result));
		
})


server.listen(Number(process.argv[2]));