var mysql=require('mysql'); //Connection of MySql with Node.JS
var connection = require('../config/db');

 
//USER ADD....
var addUser = (req, res)=>{
    console.log(req.body);         //New Data is always add in body for this we need to download body-parser package .. 
    //Case 1:
    var querySql = connection.query("Insert Into employee Set ?", [req.body], function(err, results, field){
        if(err) throw err;
        res.status(200).json({
            message:'added',
            lastId:results.insertId  
        });
    });
    //console.log("Yes I am Called..");
    //res.send("Yes");
    //CASE 2: if we want to sql having data of two tables using join....
    /*let data = req.body;
    let sql = `Insert Into employee Set ID = ${connection.escape(data.ID)},
    Name = ${connection.escape(data.Name)}, DOB = ${connection.escape(data.DOB)},Email = ${connection.escape(data.Email)},
     Gender = ${connection.escape(data.Gender)} `;
    var querySql = connection.query( sql, function(err, results, field){
        if(err) throw err;
        res.status(200).json({
            message:'added',
            lastId:results.insertId
        });
    });*/
}

//USER LIST...
var userList = (req, res)=>{
    //console.log("Yes I am Called..");
    //res.send("List");
    //let sql = 'Select * from employee';
    let sql = "select Name, DOB, Email, Gender, TID, TYPE, AMOUNT from test.employee INNER JOIN test.Transactions ON employee.ID = Transactions.ID";
    connection.query(sql, function(err, results, field){
        if(err) throw err;
        console.log(results);
        res.status(200).json(results);
        
});
}

//USERS INFO....
var userInfo = (req, res)=>{
    console.log(req.params); //get the data
    //Third parameter [req.params.ID] is FOR BINDING which secures the sql it is optional....
    connection.query('Select * from employee where ID = ?',[req.params.ID], function(err, results, field){
        if(err) throw err;
        console.log(results);
        res.status(200).json(results);
        
});
}

//USERS DATA UPDATE....
var userUpdate = (req, res)=>{
    let data = req.body;
    connection.query('UPDATE employee set Name=?, DOB=?, Email=?, Gender=? where ID = ?',[data.Name, data.DOB, 
        data.Email, data.Gender, req.params.ID], function(err, results, field){
        if(err) throw err;
        console.log(results);
        res.status(200).json({message:'Updated'});
        
});
}

//USERS DATA DELETE....
var userDelete = (req, res)=>{
    //console.log(req.params); 
    connection.query('Delete from employee where ID = ?',[req.params.ID], function(err, results, field){
        if(err) throw err;
        console.log(results);
        res.status(200).json({
            message:'Deleted'
        });
        
});  
}



module.exports = {
    addUser,
    userList,
    userInfo,
    userUpdate,
    userDelete
}


