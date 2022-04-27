const R = require('ramda');
const Z = require("zebras");

const df = Z.readCSV("CSV_file/Airplane_Crashes_and_Fatalities_Since_1908_2019.csv")
const datasetLoaded = Z.pipe([
    // array of functions for input to travel through
    Z.readCSV

])("CSV_file/Airplane_Crashes_and_Fatalities_Since_1908_2019.csv")

console.log(datasetLoaded);
Z.print(df);
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