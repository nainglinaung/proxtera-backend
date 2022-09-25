import {composeData} from '../src/repositories/student.repo'
import {utils} from "xlsx"
const assert = require('assert');
const expect = require('chai').expect;
import { faker } from '@faker-js/faker';
// import {writeFile,utils} from "xlsx";



let RowGenerator = (count) => {
    let rows = Array(count).fill({});
    return rows.map(() => {
        return {
            Username:faker.name.fullName(),
            Email:faker.internet.email(),
            University:faker.company.bs()
        }
    });
}


describe('XSLT import Test', () => {


    it('should return 0 missingCount and 1000 clean count', () => {
      
        var ws = utils.json_to_sheet(RowGenerator(1000));
        var wb = utils.book_new();
        let ws_name = "test";
        utils.book_append_sheet(wb, ws, ws_name);
        let {invalidRecords,cleanRecords,missingCount,cleanCount} = composeData(wb) 
        expect(missingCount).to.be.a('Number')
        expect(missingCount).to.equal(0)
        expect(cleanCount).to.be.a('Number')
        expect(cleanCount).to.equal(1000)
        expect(invalidRecords).to.be.a('Array')
        expect(invalidRecords).to.have.lengthOf(0);
        expect(cleanRecords).to.be.a('Array')
        expect(cleanRecords).to.have.lengthOf(1000);
    
    });
    

    it('should return 1000 missingCount and 0 clean count', () => {
        let rows = RowGenerator(1000);
        rows = rows.map(({Username,Email}) => ({Username,Email}) )
        var ws = utils.json_to_sheet(rows);
        var wb = utils.book_new();
        let ws_name = "test";
        utils.book_append_sheet(wb, ws, ws_name);
        let {invalidRecords,cleanRecords,missingCount,cleanCount} = composeData(wb)
        expect(missingCount).to.be.a('Number')
        expect(missingCount).to.equal(1000)
        expect(cleanCount).to.be.a('Number')
        expect(cleanCount).to.equal(0)
        expect(invalidRecords).to.be.a('Array')
        expect(invalidRecords).to.have.lengthOf(1000);
        expect(cleanRecords).to.be.a('Array')
        expect(cleanRecords).to.have.lengthOf(0);
    });
});