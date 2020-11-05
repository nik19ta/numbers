const cookieParser = require('cookie-parser');
const express = require('express');
const router = express.Router();

const path = require('path');


const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

const html = './public/html';


router.get('/', function (req, res) {
  res.sendFile(path.resolve(html + '/index.html'));
});

router.post('/check', jsonParser, function (req, res) {
  console.log(req.body.num);
  res.send('req.body.num')
});

module.exports = router;