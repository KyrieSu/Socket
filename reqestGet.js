var request = require('request');

 request('http://127.0.0.1:1234?name=kyrie',function(err,res,body){
     if(err){
         console.log(err);
         return;
     }
     console.log(res.statusCode);
 })
