var express = require('express');
var router = express.Router();
var config = require('../config.json');
var mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
//signup schema for database and form in headerbar.html
var signupSchema = mongoose.Schema({
  
  name: {
    type: String,
 
  },
  email: {
    type: String,
    
  },
  password: {
    type: String,
    
  },
  pkey:
  {
    type: String
  },
  pname:
  {
    type: String
  },
  pemail:
  {
    type: String
  },
  cname:
  {
    type: String
  },
  
})
const sellers=module.exports = mongoose.model('sellers', signupSchema);

  module.exports.getSellerById=function(id,callback)
  {
      sellers.findById(id,callback);
  }
  module.exports.getUserByEmail=function(email,callback)
  {
      const query = {email:email};
      sellers.findOne(query,callback);
   
  }
  module.exports.allSeller=function(data,callback)
  {
     
      sellers.find(callback);

     
  }

  module.exports.addSeller=function(newUser,callback)
  {
      bcrypt.genSalt(10,(err,salt)=>
    {
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
           // if(err) throw err;
            newUser.password=hash;
            newUser.save(callback);
        });
    });
  }

  module.exports.comparePassword = function(candidatePassword,hash,callback)
{
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>
    {
      if(err)
      {
        callback(error);
        return;
      }
      callback(null,isMatch);
    });
}