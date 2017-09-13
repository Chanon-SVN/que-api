var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var connection = require('../connection');
connection.connect();

var queSchema = new Schema({
  name:String,
  topic:String,
  time:String,
  duration:String
})

queSchema.methods.getQue = async function(){
  return await this.model('Que').find({});
}

queSchema.methods.createQue = async function(que) {
  return await que.save();
}

module.exports = mongoose.model('Que', queSchema);
