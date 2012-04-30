	
	/*
	Testando Git/Github
	*/

	var http = require('http');

	var server = http.createServer(function(request,response){
		
		response.writeHead(200, {"Contet-Type":"text/plain"});
		response.end("Finalmente, OLÁ MUNDO");
		
	});
	
	var port = process.env.PORT || 3000;
	
	server.listen(port);
