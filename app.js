const mysql = require("mysql2");
const cookieParser = require('cookie-parser');
const express = require('express');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()


const app = express();


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "1234567890",
    database: 'randomizer'
});


app.post('/check', jsonParser, function (req, res) {
    connection.query('SELECT * FROM `numbers`', (err, results, fields) => {
        for (let i = 0; i < array.length; i++) {
            if (results[i]['code'] == req.body.num) {
              res.send({'data': results[i]})
            }
        }
    });
});


app.listen(4000, () => {
    console.log('Server started...');
});