var express = require('express');
var router = express.Router();

//For DATABSE
var userCtrl = require('./controllers/users');
var bodyParser = require('body-parser');

//Parse request of content type:- application/x-www-form-urlencoded
var urlencoderParser = bodyParser.urlencoded({extended:false})

//parse request of content type:-application-json return in json format
router.use(bodyParser.json());


router.post('/add',urlencoderParser,userCtrl.addUser);    //To insert new data in table 

router.get('/list',userCtrl.userList); //For getting the table.. 

router.get('/info/:ID',userCtrl.userInfo); //For getting the user info..

router.put('/update/:ID',urlencoderParser, userCtrl.userUpdate); //For update data... 

router.delete('/delete/:ID',userCtrl.userDelete);   //For Delete data.... 






module.exports = router;


