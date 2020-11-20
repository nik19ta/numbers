const db = require('./query');

const randint = (min, max) => {
    return +(Math.random() * (max - min) + min).toFixed(0)
};

// !!init project!!
async function init() {
    for (let i = 0; i < 99; i++) {
        await db.select(`insert into numbers (code,crate)  values(${randint(100000, 999999)}, ${randint(1,3)})`)
    }
}

init()
// !!init project!!