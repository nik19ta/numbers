const db = require('./query');

const randint = (min, max) => {
    return +(Math.random() * (max - min) + min).toFixed(0)
};

// !!init project!!
async function init() {
    // first !!!!
    for (let i = 0; i < 21; i++) {
        await db.select(`insert into numbers (crate, name, code)  values(${randint(100000, 999999)}, ${"Пуфик"}, ${1})`)
    }
    for (let i = 0; i < 15; i++) {
        await db.select(`insert into numbers (crate, name, code)  values(${randint(100000, 999999)}, ${"Блокнот белый"}, ${1})`)
    }
    for (let i = 0; i < 8; i++) {
        await db.select(`insert into numbers (crate, name, code)  values(${randint(100000, 999999)}, ${"Попсокет белый"}, ${1})`)
    }
    for (let i = 0; i < 8; i++) {
        await db.select(`insert into numbers (crate, name, code)  values(${randint(100000, 999999)}, ${"Попсокет зеленый"}, ${1})`)
    }
    // end first !!!!
    
    for (let i = 0; i < 22; i++) {
        await db.select(`insert into numbers (crate, name, code)  values(${randint(100000, 999999)}, ${"Додопицца промокод"}, ${2})`)
    }
    for (let i = 0; i < 10; i++) {
        await db.select(`insert into numbers (crate, name, code)  values(${randint(100000, 999999)}, ${"Спорт набор"}, ${2})`)
    }
    for (let i = 0; i < 20; i++) {
        await db.select(`insert into numbers (crate, name, code)  values(${randint(100000, 999999)}, ${"Смарт будильник"}, ${2})`)
    }
    
    // second !!!
    
    for (let i = 0; i < 10; i++) {
        await db.select(`insert into numbers (crate, name, code)  values(${randint(100000, 999999)}, ${"Столик-трансформер"}, ${3})`)
    }
    for (let i = 0; i < 18; i++) {
        await db.select(`insert into numbers (crate, name, code)  values(${randint(100000, 999999)}, ${"Черный блокер для камеры"}, ${3})`)
    }
    for (let i = 0; i < 17; i++) {
        await db.select(`insert into numbers (crate, name, code)  values(${randint(100000, 999999)}, ${"Серый блокер для камеры"}, ${3})`)
    }
    for (let i = 0; i < 7; i++) {
        await db.select(`insert into numbers (crate, name, code)  values(${randint(100000, 999999)}, ${"Powerbank"}, ${3})`)
    }
    // end second !!!

}

init()
// !!init project!!