const queModel = require('../models/queModel')
const mongoose = require('mongoose');
var Que = mongoose.model('Que')

exports.createQue = async function (name, topic, time, duration) {

  var que  = new Que({
    name,
    topic,
    time,
    duration
  })

  return await que.createQue(que);
}

exports.deleteQue = function (filter) {
  let que = new Que();

  return que.deleteQue(filter);
}

exports.getQue = function (req, res) {
  let que = new Que();

  return que.getQue();
}
