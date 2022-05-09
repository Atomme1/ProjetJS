//libraries import
import * as R from 'ramda';
import * as fs from 'fs';

//functions import
import { csvToJson, getTraining, getTesting, dropColumns, doShuffle} from "./datasetFunctionUtils.js";
import { getValues, getVectors, first, topTwo} from "./PCAFunctionUtils.js"
import { getChi2,getExpectedValues, getObservedValues,getListObservedAndExpected} from "./chi2test.js";

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

//console.log(dataset);

//console.log(getTraining(dataset));
//console.log(getTesting(dataset));

//console.log(topTwo(dataset));

const test = getTesting(dataset);
console.log(test);

console.log(getChi2(test).print());


