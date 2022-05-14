// Libraries import
import * as fs from 'fs';
import * as R from 'ramda';

// Functions import
import {csvToJson, getTraining, getTesting, dropColumns, doShuffle} from './datasetFunctionUtils.js';
import {getValues, getVectors, first, topTwo} from './PCAFunctionUtils.js';
import {getChi2, getChi2Print, getExpectedValues, getObservedValues, getListObservedAndExpected} from './chi2FunctionUtils.js';

// Details of the csv to analyze
const csv = fs.readFileSync('./CSV_file/Iris.csv', 'utf8');
const columns = ['Id', 'SepalLengthCm', 'SepalWidthCm', 'PetalLengthCm', 'PetalWidthCm', 'Species'];
// Analysis of the csv
const datasetinit = csvToJson(csv, columns);

const getDataset = R.pipe(
    dropColumns,
    doShuffle,
);

const chi2result = x => R.pipe(
    x,
    getChi2Print,
);

const resultats = R.pipe(
    getDataset,
    R.applySpec({
    training: chi2result(getTraining),
    testing: chi2result(getTesting)
    })
);

console.log(resultats(datasetinit))