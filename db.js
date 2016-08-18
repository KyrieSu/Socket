var mysql = require('mysql');

var connection = mysql.createConnection({
    host : '52.27.9.64',
    user : '',
    password : ''
});

connection.connect(function(err){ //connect test
    if(err){
        console.log(err.stack);
        return;
    }
    console.log(connection.threadId);
});
