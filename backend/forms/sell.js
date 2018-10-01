var express = require('express');
var router = express.Router();
var config = require('../config.json');
var mongoose = require('mongoose');



const Sell=require('./selleraccount');

router.get('/', (req, res) => {

});
// it will add the user in the database 

router.post('/createaccount',(req,res)=>
{
    console.log(`the request of post body:  ${req.body}`);
    let newSell = new Sell(
    {
       name:req.body.name,
       email:req.body.email,
       password:req.body.email,
       cname:req.body.cname
       
       
    });
    console.log(`${req.body.name}`+req.body.email+req.body.image2);
   
     
     
        Sell.addSeller(newSell,(err,Sell)=>{
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

router.post('/authenticate',(req,res,next)=>
{
  const email = req.body.email;
  const password = req.body.password;
  console.log(`email: ${email}`);
  //console.log(`password: ${email}`);
  Sell.getUserByEmail(email,(err,signups)=>
  {
    if(err) throw err;
    if(!email)
    {
      return res.json({success:false,msg:'Email is not registerd with us'});
    }
    Sell.comparePassword(password,sellers.password,(err,isMatch)=>
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
            sellers:{
              id:sellers._id,
              name:sellers.name,
              email:sellers.email
              
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




router.post('/paymentmode',(req,res)=>
{
    console.log(`the request of post body:  ${req.body}`);
    let newSell = new Sell(
    {
       pkey:req.body.pkey,
       pname:req.body.pname,
       pemail:req.body.pemail,
        
    });
    console.log(`${req.body.name}`+req.body.email+req.body.image2);
   
     
     
        Sell.addpayment(newSell,(err,Sell)=>{
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
module.exports=router;