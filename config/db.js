var mysql=require('mysql'); //Connection of MySql with Node.JS

var connection=mysql.createConnection({
    host:"localhost",
    user:"root",                                
    password:"123456",
    database:"test",
    connectionLimit: 10
});

connection.connect(function(err){                         
    if(err)
      throw err;
    console.log("Connection Successful...");
});


module.exports = connection;
