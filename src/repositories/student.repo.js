import {utils} from "xlsx"

export const  composeData = (workbook) => {
    let sheets = workbook.SheetNames;

    let invalidRecords = [];
    let cleanRecords = [];
    for (let sheet of sheets) {
        let sheetData = workbook.Sheets[sheet];
        let output  = utils.sheet_to_json(sheetData);
    
        for (let record of output) {
        if (record.Username && record.University && record.Email) {
                cleanRecords.push(record);
        } else {
                invalidRecords.push(record);
        }
        }
    }
    return {invalidRecords,missingCount:invalidRecords.length,cleanCount:cleanRecords.length,cleanRecords}
}
