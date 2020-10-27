
const mysql = require("mysql2");

let array = ['Бокс мерч','Рабочие место', 'wellbeing'];


const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "randomizer",
  password: "1234321"
});

for (let i = 0; i < 155; i++) {
    let rand = Math.floor(Math.random() * array.length);

    console.log({
        code: randomInteger(100, 999),
        box: array[rand]
    });

    pool.query(`insert into numbers (code,crate)  values(${randomInteger(100, 999)}, ${array[rand]})`, function(err, data) {
      if(err) return console.log(err);
      console.log('Удача');
    });

    
}


function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand).toString();
}