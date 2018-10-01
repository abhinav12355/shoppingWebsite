const express=require('express');
const path=require('path');
const cors=require('cors');
const passport=require('passport');
const app=express();

app.use('',express.static('static'));
app.use('/home',express.static('static'));

var mongoose=require('mongoose');// finding database
var config=require('./config.json');//data base connectivity

mongoose.connect(config.connectionString);


var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./passport')(passport);


app.use('',function(req,res,next)
{
    
    middlewarefunction();
    next();
});
var middlewarefunction=function()
{
  
        
    console.log('middle ware is called');
}

var signupform=require('./forms/signupform');
app.use('/signupform',signupform);
var productroute=require('./forms/productroute');
app.use('/productroute',productroute);

var sell=require('./forms/sell');
app.use('/sell',sell);

var date=new Date();


app.listen(8000,console.log(`Server is working :`+date));