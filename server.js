var http = require('http');
var url = require('url');
var qs = require('querystring')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Hello World ~');
    if(req.method=='POST'){ // post method
        var str = '';
        req.on('data',function(data){
            str += data;
        })
        req.on('end',function(){
            var query = qs.parse(str);
            console.log(query);
        })
    }else{ // GET method
        var query = url.parse(req.url,true).query;
        console.log(query);
    }
    res.end();
}).listen(1234);

console.log('server running at localhost:1234')
