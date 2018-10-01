var express = require('express');
var router = express.Router();
var config = require('../config.json');
var mongoose = require('mongoose');
const Product=require('./product');



router.post('/cartdata', (req, res) => {
   

  let email=req.body.email;
  console.log("email in get request : "+req.body.email);
    Product.allProduct(req.body.email,(err, carts)=> {
      if (err) 
      {

       
        res.json({success: true ,msg:'err to get all user'});
      }
      else
      {
        //res.json({success: true ,msg:'success to get all user'});
       console.log("get product data:");
         console.log(carts);
        res.send(carts);
      }
  });
 
});


router.post('/addtocart',(req,res)=>
{
  console.log(`the request of post body:  ${req.body}`);
  var newProduct = new Product(
  {
     itemid:req.body.itemid,
     itemname:req.body.itemname,
     description:req.body.description,
     quantity:req.body.quantity,
     price:req.body.price,
     imagepath:req.body.imagepath,
     email:req.body.email,
  });
  console.log(`${req.body.itemname}`+req.body.description+req.body.email+req.body.price+req.body.imagepath);
 
  const itemid = req.body.itemid;
  
  Product.getProductByItemID(req.body.itemid,(err,carts)=>
  {
   ///if(err) throw err;
 console.log("checking fing itemid: "+itemid);
    if(carts==null)
    {
      
    
   
      Product.addProduct(newProduct,(err,carts)=>{
        if(err)
        {
          console.log("got the error in adding product "+err);
          //res.status(400);
          res.json({success: false ,msg:'failed to add to cart'});
        }
        else
        {
          res.json({success: true ,msg:'success to add in cart'});
        }  
    
      });
    }
    else
    {
      return res.json({success:false,msg:'Item already added to cart'});
    }
 
    });
});


router.delete('/deleteitem',(req,res)=>
{

  let id=req.body.id;
  console.log(`itemid value: ${id}`);
  Product.removeUser(id,(err,carts)=>
{
  if(err)
  {
    console.log("got the error in adding product "+err);
    //res.status(400);
    res.json({success: false ,msg:'failed to delete to cart'});
  }
  else
  {
    res.json({success: true ,msg:'success to delete in cart'});
    console.log(carts);
    //res.redirect('/cart');
  }  

});
});


module.exports=router;