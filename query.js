const mysql = require('mysql2');


async function select(query) {
    return new Promise((resolve, reject) => {
        const con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            database: 'randomizer',
            password: '1234567890',
        });
        con.promise().query(query)
            .then(([rows, fields]) => {
                resolve(rows)
            })
            .catch()
            .then(() => con.end());
    })
}

async function get_code(id) {
    let data = await select(`select * from numbers where code=${id}`)
    return data[0]['crate']
}


module.exports.get_code = get_code;
module.exports.select = select;