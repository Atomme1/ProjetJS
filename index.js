//libraries import
import * as R from 'ramda';
import * as Z from 'zebras';
import * as fs from 'fs';

//functions import
import { csvToJson, getTraining, getTesting, dropColumns, doShuffle} from "./datasetFunctionUtils.js";

//details of the csv to analyze
const csv = fs.readFileSync('./CSV_file/Iris.csv', 'utf8')
const columns = ['Id','SepalLengthCm','SepalWidthCm','PetalLengthCm','PetalWidthCm','Species']

//analysis of the csv
const datasetinit = csvToJson(csv,columns);

const getDataset = R.pipe(
    dropColumns,
    doShuffle,
);

const dataset = getDataset(datasetinit);

console.log(dataset);

console.log(getTraining(dataset));
console.log(getTesting(dataset));


