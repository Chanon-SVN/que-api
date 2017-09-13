const express = require('express')
const router = express.Router()
const queController = require('../controllers/queController')

router.get('/', function (req, res) {
  res.send('test');
});

router.get('/ques', async function (req, res) {

  res.send(await queController.getQue());
});

router.post('/create-que', async function (req, res) {
  console.log(req.body);
  let name = req.body.name;
  let topic = req.body.topic;
  let time = req.body.time;
  let duration = req.body.duration;

  console.log(name);
  res.send(await queController.createQue(name, topic, time, duration));
});

module.exports = router;
