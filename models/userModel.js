var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:String,
  password:String
})

userSchema.methods.getUser = async function(){
  return await this.model('User').find({});
}

userSchema.methods.createUser = async function(user) {
  return await user.save();
}

userSchema.methods.login = async function(username, password) {
  return await this.model('User').find({username, password});
}

module.exports = mongoose.model('User', userSchema);

