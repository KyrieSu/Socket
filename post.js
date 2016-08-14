var request = require('request');

var option = {
    url : 'http://127.0.0.1:1234',
    method : 'POST',
    body : 'hello world , too ~ ',
    form : {
        name : 'Kyrie' ,
        school : 'YZU'
    }
}


request(option,function(err,res,body){
    if(err){
        console.log(err);
        return;
    }
    console.log(res.statusCode);
})
