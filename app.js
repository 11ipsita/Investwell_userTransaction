const express = require('express');
var path = require('path');
const app = express();
const port = 8080;

var route = require('./route');

//app.use('/', route);
app.use('/users', route); // For databse



app.listen(port, ()=>{
    console.log(`App is listening at http://localhost:${port}`);
});
