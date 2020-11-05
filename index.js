// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const mysql = require("mysql2");
// const express = require('express');

// const indexRouter = require('./routes/index');

const path = require('path');

// const app = express();

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });


// // app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.set('view engine', 'html');
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', __dirname + '/public/views');
// app.use(cookieParser());

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "randomizer",
  password: "1234567890"
});

    pool.query(`select * from numbers`, function(err, data) {
      if(err) return console.log(err);
      console.log('Удача');
    });

    
// // }

// app.use('/', indexRouter);

// app.listen(4000, () => {
//     console.log('Server started...');
// });
// module.exports = app;