const userModel = require('../models/userModel');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.login= async function (username, password) {
  console.log("UserController : ", username, password);
  let user = new User();

  let result = await user.login(username,password);

  if(result[0]){
    return {success:true, token:'abcd', username:result[0].username};
  }else{
    return {sucesss:false};
  }
}

