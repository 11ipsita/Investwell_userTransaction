const express = require('express');
var path = require('path');
const app = express();
const port = 8080;

var route = require('./route');

app.use('/public', express.static('public'));  //public folder 
//app.use('/', route);
app.use('/users', route); // For databse

/*app.set('view engine', 'ejs');   //set ejs view engine....
app.set('views', path.join(__dirname, './resource'));*/

//app.set('view engine', 'pug'); 



app.listen(port, ()=>{
    console.log(`App is listening at http://localhost:${port}`);
});