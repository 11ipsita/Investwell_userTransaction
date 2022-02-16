var express = require('express');
var router = express.Router();
var path = require('path');
var md = require("./middleware");   
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




//To show HTML PAGE
/*router.get('/',(req, res)=>{
    //let filePath = __dirname+'/home.html';
    let filePath = path.join(__dirname, '/home.html');                         //By using path we can know details and path of the file...[../../home.html]
    console.log(filePath);       //To know the file path show in terminal..
    res.sendFile(filePath); 
});*/

//FOR ejs view engine......
/*router.get('/',(req, res)=>{  
    let params = {
        name:'Code Improve',
        id : 2,
        blogs:[
            'Node', 'Angular', 'React'
        ]
    }
    res.render('home', params); 
    //res.render('home', {name:'Code Improve'}); 
});*/

/*router.get('/demo-data',(req, res)=>{  
    let params = {
        name:'Code Improve',
        id : 2,
        blogs:[
            'Node', 'Angular', 'React'
        ]
    }
    res.render('home', params); 
    //res.render('home', {name:'Code Improve'}); 
});*/

/*router.get('/',(req, res)=>{
    res.send("Hello My Name is Ipsita!!!");
});*/

//For Route
//To call url
//app.methodName('/urlname', callback);
/*router.get('/post', md.postMw, (req, res)=>{
    res.send(`Post Page is  Called`); 
});*/

//NOTE :::: {req.params.id} to get the id here.......
/*router.get('/post/:id', (req, res)=>{
    console.log(req.params);
    res.send(`PostID ${req.params.id} Page is  Called`); 
});*/

//NOTE :::: for valiation we use :id(\\d+) :== that no one can inter any text in url with post id... 
/*router.get('/post/:id(\\d+)', (req, res)=>{
    console.log(req.params);
    res.send(`PostID ${req.params.id} Page is  Called`);
});*/

//NOTE :::: for validation we use :id([0-9]{2})   := When there is condition that id in url should be 2 digit or 3 digits....
/*router.get('/post/:id([0-9]{2})', (req, res)=>{
    console.log(req.params);
    res.send(`PostID ${req.params.id} Page is  Called`);
});*/

//NOTE :::: If u want to run multiple url on one function...... like if anyone write postss / ppp....
/*router.get(['/post', '/posts', '/pp'], (req, res)=>{
    res.send('Post Page is  Called');
});


router.get('/blog',md.blogMd, (req, res)=>{
    res.send('Blog Page is  Called');
});
*/
/*router.get('/blog/:fn-:ln', (req, res)=>{    //NOTE :::: http://localhost:8080/blog/demo-test run for name having both first name and last name it prints { fn: 'demo', ln: 'test' }.
    console.log(req.params);
    res.send(`Blog Name ${req.params.fn} ${req.params.ln}`);
});

//NOTE :::: For API and REST CALL by help of regex...
router.get(/^\/(api|rest)\/.+$/, (req, res)=>{
    res.send('API  Called');
});*/



module.exports = router;


