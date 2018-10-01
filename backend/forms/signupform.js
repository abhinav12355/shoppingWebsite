var express = require('express');
var router = express.Router();
var config = require('../config.json');
var mongoose = require('mongoose');
const passport=require('passport');
const jwt=require('jsonwebtoken');


const User=require('./user');//check syntax
const Product=require('./product');// it will retrieve all the data from shop database ans can be used to further to match the login details
router.get('/', (req, res) => {
    res.set({
      "Content-type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:4200"

    });

    console.log("get method called");
  let data;
    User.allUser(data,(err, User)=> {
        if (err) 
        {

         
          res.json({success: true ,msg:'err to get all user'});
        }
        else
        {
          res.json({success: true ,msg:'success to get all user'});
        }
    });
    res.send(User.allUser.data);
});
// it will add the user in the database 
router.post('/adduser',(req,res)=>
{
  console.log(`the request of post body:  ${req.body}`);
  let newUser = new User(
  {
     fname:req.body.fname,
     lname:req.body.lname,
     email:req.body.email,
     password:req.body.password,
     phone:req.body.phone
  });
  console.log(`${req.body.fname}`+req.body.lname+req.body.email+req.body.password+req.body.phone);
 
   
   
      User.addUser(newUser,(err,User)=>{
        if(err)
        {
          console.log("got the error in creating database "+err);
          //res.status(400);
          res.json({success: false ,msg:'failed to regiser user'});
        }
        else
        {
          res.json({success: true ,msg:'success to regiser user'});
        }  
    
      });
    
 
    
});

router.post('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>
{
res.json({user:req.signups});
})
router.post('/authenticate',(req,res,next)=>
{
  const email = req.body.email;
  const password = req.body.password;
  console.log(`email: ${email}`);
  //console.log(`password: ${email}`);
  User.getUserByEmail(email,(err,signups)=>
  {
    if(err) throw err;
    if(!email)
    {
      return res.json({success:false,msg:'Email is not registerd with us'});
    }
    User.comparePassword(password,signups.password,(err,isMatch)=>
    {
        if(err) throw err;
        if(isMatch)
        {
          const token=jwt.sign(signups.toJSON(),config.secret,{
            expiresIn:604800//equal to 1 week

          });
          return res.json({
            success:true,
            token:'JWT'+token,
            signups:{
              id:signups._id,
              name:signups.fname+signups.lname,
              email:signups.email
              
            }
          })
          
         // localStorage.setItem('Email',email );  
         // localStorage.setItem('loginVal',1 );        
        }
        else{
            return res.json({success:false,msg:'wrong password'});
          //  localStorage.setItem('loginVal',0 );   
        }
    });
  });

});
module.exports=router;