import * as R from 'ramda';
import * as fs from 'fs';


import {csvToJson} from "./datasetFunctionUtils.js";
const csv = fs.readFileSync('./CSV_file/Iris.csv', 'utf8')
const columns = ['Id','SepalLengthCm','SepalWidthCm','PetalLengthCm','PetalWidthCm','Species']

const dataset = csvToJson(csv,columns);

const getShuffleArray = R.sort(() => 0.5 - Math.random());

console.log(getShuffleArray(dataset));
