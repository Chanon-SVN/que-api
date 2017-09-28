var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

queSchema.methods.deleteQue = async function(filter) {

  return await this.model('Que').findByIdAndRemove(filter)
}

module.exports = mongoose.model('Que', queSchema);
