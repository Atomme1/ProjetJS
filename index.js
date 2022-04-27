import * as R from 'ramda';
import * as Z from 'zebras';
import * as fs from 'fs';
import csvToJson from "./CSV_file/csvToJson.js";

const dataset = csvToJson();
console.log(dataset);




