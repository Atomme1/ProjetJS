const R = require('ramda');
const Z = require("zebras");
const dataFromCSV = ("CSV_file/Airplane_Crashes_and_Fatalities_Since_1908_2019.csv");
import {csvToJson} from "https://github.com/Atomme1/ProjetJS/blob/927a443fc238d90464e76b368fba83b0ae9e37e6/CSV_file/csvToJson.js";
/*
const df = Z.readCSV("CSV_file/Airplane_Crashes_and_Fatalities_Since_1908_2019.csv")
const datasetLoaded = Z.pipe([
    // array of functions for input to travel through
    Z.readCSV,
    Z.dropCol("Summary")
])("CSV_file/Airplane_Crashes_and_Fatalities_Since_1908_2019.csv")

console.log(datasetLoaded);
*/
const json = csvToJson(dataFromCSV);
console.log(json);

/*

const data = [
    {"Date": "1997-01-01", "Value": "12"},
    {"Date": "1997-01-02", "Value": "14"},
    {"Date": "1997-01-03", "Value": "7"},
    {"Date": "1997-01-04", "Value": "112"}
]
Z.pipe([
    Z.parseNums(["Value"]), // converts "Value" column to floats
    Z.getCol("Value"), // extracts "Value" column to array
    Z.mean() // calculates mean of "Value" array
])(data)
// 36.25

*/