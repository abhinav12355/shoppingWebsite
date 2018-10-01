var express = require('express');
var router = express.Router();
var config = require('../config.json');
var mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
//signup schema for database and form in headerbar.html
var signupSchema = mongoose.Schema({
  
  
  email: {
    type: String,
    required:true,
  },
 
  category:
  {
    type: String
  },
  image1:
  {
    type: String
  },
  image2:
  {
    type: String
  },
  image3:
  {
    type: String
  },
  price:
  {
    type: String
  },
  description:
  {
    type: String
  },
  quantity:
  {
    type: String
  }

 
})
const selleritems=module.exports = mongoose.model('selleritems', signupSchema);

module.exports.addSeller=function(newProduct,callback)
{
    newProduct.save(callback);
}

module.exports.allSeller=function(email,callback)
{
   const query={email:email};
    carts.find(query,callback);
   
}