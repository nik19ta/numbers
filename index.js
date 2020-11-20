const db = require('./query');
let express = require('express');
let app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/get_code', async function (req, res) {
  res.send({
    'code': await db.get_code(req.originalUrl.split('?')[1].split('=')[1]),
    'num': req.originalUrl.split('?')[1].split('=')[1]
  })
});

app.listen(3000, () => {
  console.log('Server started...');
});