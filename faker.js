import { faker } from '@faker-js/faker';
import {writeFile,utils} from "xlsx";
// or, if using CommonJS
// const { faker } = require('@faker-js/faker');

// const randomName = faker.name.fullName(); // Rowan Nikolaus
// const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

// console.log(randomEmail)





let run = async() => {

    let rows = Array(100000).fill({});
    

    rows = rows.map(() => {
        return {
            Username:faker.name.fullName(),
            Email:faker.internet.email(),
            University:faker.company.bs()
        }
    })

    var ws = utils.json_to_sheet(rows);
    var wb = utils.book_new();
    let ws_name = "test";
    utils.book_append_sheet(wb, ws, ws_name);
    writeFile(wb, "test.xlsx");
}


run().then(() => {
    console.log("success")
})