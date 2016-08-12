var http = require('http');
var url = require('url')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Hello World ~');
    var query = url.parse(req.url,true).query;
    console.log(query);
    res.end();
}).listen(1234);

console.log('server running at localhost:1234')
