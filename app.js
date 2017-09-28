const express = require('express')
const app = express()
const defaultRouter = require('./routes/defaultRouter')
const bodyParser = require('body-parser')

var connection = require('./connection');
connection.connect();

var cors = require('cors')
app.use(cors())

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/', defaultRouter);


app.listen(3000, function () {
  console.log('API LISTENNING ON PORT 3000')
})
