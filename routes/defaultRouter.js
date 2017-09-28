const express = require('express')
const router = express.Router()
const queController = require('../controllers/queController')
const userController = require('../controllers/userController')

router.get('/', function (req, res) {
  res.send('test');
});

router.get('/ques', async function (req, res) {

  res.send(await queController.getQue());
});

router.post('/delete-que', async function (req, res) {
   let filter = req.body._id;

   console.log(filter);
   res.send(await queController.deleteQue(filter));
})

router.post('/create-que', async function (req, res) {
  let name = req.body.name;
  let topic = req.body.topic;
  let time = req.body.time;
  let duration = req.body.duration;

  console.log(name);
  res.send(await queController.createQue(name, topic, time, duration));
});

router.post('/login', async function(req, res){
  let username = req.body.username;
  let password = req.body.password;

  res.send(await userController.login(username, password));
})

module.exports = router;
