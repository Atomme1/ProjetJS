import * as R from 'ramda';
import * as Z from 'zebras';
import * as fs from 'fs';


const dataFromCSV = ("./CSV_file/Airplane_Crashes_and_Fatalities_Since_1908_2019.csv");
import csvToJson from "./CSV_file/csvToJson.js";

const dataset = csvToJson(dataFromCSV);
console.log(dataset);



