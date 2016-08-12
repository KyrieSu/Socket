var request = require('request');

 request.get('127.0.0.1:1234?data=123',function(err,res,body){
     if(err){
         console.log(err);
         return;
     }
     console.log(res.statusCode);
 })
