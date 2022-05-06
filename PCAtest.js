import * as fs from 'fs';
import * as R from 'ramda';
import PCA from 'pca-js';

//functions import
import { csvToJson, getTraining, getTesting, dropColumns} from "./datasetFunctionUtils.js";

//details of the csv to analyze
const csv = fs.readFileSync('./CSV_file/Iris.csv', 'utf8')
const columns = ['Id','SepalLengthCm','SepalWidthCm','PetalLengthCm','PetalWidthCm','Species']

//analysis of the csv
const datasetinit = csvToJson(csv,columns);

const dataset = dropColumns(datasetinit)


const getValues = R.pipe(
    R.map(
        R.pipe(
            R.values,
            R.drop(1),
            R.dropLast(1),
        )
    )
);

const getVectors = R.pipe(
    getValues,
    PCA.getEigenVectors
);

//console.log(getVectors(dataset));

const first = R.pipe(
    getVectors,
    R.converge(PCA.computePercentageExplained, [R.identity, R.prop(0)]),
);

const topTwo = R.pipe(
    getVectors,
    R.converge(PCA.computePercentageExplained, [R.identity, R.prop(0), R.prop(1)]),
);

console.log(first(dataset));
console.log(topTwo(dataset));