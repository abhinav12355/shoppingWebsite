var express = require('express');
var router = express.Router();
var config = require('../config.json');
var mongoose = require('mongoose');
var productSchema = mongoose.Schema({
    itemid:{
      type:Number,
      required:true
    },
    itemname: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
   quantity: {
      type: Number,
      required: true
    },
    
    price: {
      type: Number,
      required: true
    },
    imagepath: {
      type: String,
      required: true
    },
    email: {
        type: String,
        required: true
      }

   
  })

  
  const carts=module.exports = mongoose.model('carts', productSchema);

  module.exports.getProductByItemID=function(itemid,callback)
  {
    console.log(typeof(itemid));
    const query = {itemid:itemid};
      callback = carts.findOne(query,callback);
      //console.log(  carts.findOne(query,callback));
  }
  module.exports.allProduct=function(email,callback)
  {
     const query={email:email};
      carts.find(query,callback);
     
  }
  module.exports.removeUser=function(itemid,callback)
  {
    const query = {itemid:itemid};
      callback=carts.remove(query,callback);
     
  }
  module.exports.addProduct=function(newProduct,callback)
  {
      newProduct.save(callback);
  }
  
  
