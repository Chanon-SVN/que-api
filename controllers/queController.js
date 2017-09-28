const queModel = require('../models/queModel')
const mongoose = require('mongoose');
var Que = mongoose.model('Que')

exports.createQue = async function (name, topic, time, duration) {
  console.log("CERATE : ", name+"  "+topic+ "  "+time+"  "+duration);

  var que  = new Que({
    name,
    topic,
    time,
    duration
  })

  return await que.createQue(que);
}

exports.deleteQue = function (filter) {
  console.log("DELETE : " + filter);
  let que = new Que();

  return que.deleteQue(filter);
}

exports.getQue = function (req, res) {
  let que = new Que();

  return que.getQue();
}
