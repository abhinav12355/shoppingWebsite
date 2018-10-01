var express = require('express');
var router = express.Router();
var config = require('../config.json');
var mongoose = require('mongoose');



const Seller=require('./selleritems');

router.post('/getdata', (req, res) => {
    
 
   let email=req.body.email;
   console.log("email in get request : "+req.body.email);
     Seller.allSeller(req.body.email,(err, selleritems)=> {
       if (err) 
       {
 
        
         res.json({success: true ,msg:'err to get all user'});
       }
       else
       {
         //res.json({success: true ,msg:'success to get all user'});
        console.log("get product data:");
          console.log(selleritems);
         res.send(selleritems);
       }
   });
  
 });

router.post('/additem',(req,res)=>
{
  console.log(`the request of post body:  ${req.body}`);
  let newSell = new Sell(
  {
     cname:req.body.cname,
     category:req.body.category,
     image1:req.body.image1,
     image2:req.body.image2,
     image3:req.body.image3,

     
  });
  console.log(`${req.body.fname} `+req.body.lname+req.body.email+req.body.image1+req.body.image2);
 
   
   
      Seller.addSeller(newSell,(err,Seller)=>{
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
