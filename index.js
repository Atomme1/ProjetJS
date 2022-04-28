//libraries import
import * as R from 'ramda';
import * as Z from 'zebras';
import * as fs from 'fs';

//functions import
import csvToJson from "./CSV_file/csvToJson.js";

//details of the csv to analyze
const csv = fs.readFileSync('./CSV_file/Iris.csv', 'utf8')
const columns = ['Id','SepalLengthCm','SepalWidthCm','PetalLengthCm','PetalWidthCm','Species']

//analysis of the csv
const dataset = csvToJson(csv,columns);
console.log(dataset);




