import { faker } from '@faker-js/faker';
import {writeFile,utils} from "xlsx";

let run = async() => {

    let rows = Array(1000000).fill({});
    
    rows = rows.map(() => {

        let rand = faker.datatype.number({min:1,max:3});

        if (rand == 3) {
            return {
                Username:faker.name.fullName(),
                Email:faker.internet.email(),
                University:faker.company.bs()
            }
        }

        if (rand == 2) {
            return {
                Username:faker.name.fullName(),
                Email:faker.internet.email()
            }
        }

        if (rand == 1) {
            return {
                Username:faker.name.fullName()
            }
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