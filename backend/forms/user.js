var express = require('express');
var router = express.Router();
var config = require('../config.json');
var mongoose = require('mongoose');
const bcrypt=require('bcryptjs');
//signup schema for database and form in headerbar.html
var signupSchema = mongoose.Schema({
  fname: {
    type: String,
 required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
 
  }

 
})

const signups=module.exports = mongoose.model('signups', signupSchema);

  module.exports.getUserById=function(id,callback)
  {
      signups.findById(id,callback);
  }
  module.exports.getUserByEmail=function(email,callback)
  {
      const query = {email:email};
      signups.findOne(query,callback);
   
  }
  module.exports.allUser=function(data,callback)
  {
     
      signups.find(callback);
     
  }

  module.exports.addUser=function(newUser,callback)
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