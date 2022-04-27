const R = require('ramda');
const Z = require("zebras");
const dataFromCSV = ("CSV_file/Airplane_Crashes_and_Fatalities_Since_1908_2019.csv");

/*
const df = Z.readCSV("CSV_file/Airplane_Crashes_and_Fatalities_Since_1908_2019.csv")
const datasetLoaded = Z.pipe([
    // array of functions for input to travel through
    Z.readCSV,
    Z.dropCol("Summary")
])("CSV_file/Airplane_Crashes_and_Fatalities_Since_1908_2019.csv")

console.log(datasetLoaded);
*/

transformCSVText = R.pipe(
    R.pipe( //text
        R.split('\n'), //rows text
        R.map( //row text
            R.pipe( //row text
                R.split(','), //cells
                R.map(R.trim) //trim cells
            )
        )
    ), //[ rows -> cells]
    R.splitAt(1), //name's column first row
    R.apply(   //[ [names], [lines] ]
        R.lift(R.zipObj)
    )
)
arrayOfObject = transformCSVText(dataFromCSV);
console.log(arrayOfObject);
Table(arrayOfObject);
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