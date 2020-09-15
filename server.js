 const express = require('express');
 const app = express();
 const bodyParser = require('body-parser');
 app.use(bodyParser.urlencoded({extended: true}));

 app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
 });

 app.post('/', function(req, res) {
    console.log(req.body);
    let num1 = req.body.num1;
    let num2 = req.body.num2;
 });

 app.listen(3000, function(){
    console.log('Server is running on port 3000.');
 });