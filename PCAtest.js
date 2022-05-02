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

//console.log(dataset);

const values = []

for (let i = 0; i < dataset.length; i++) {
    values[i] = Object.values(dataset[i]);
}

for (let i = 0; i < values.length; i++) {
    values[i].pop()
    values[i].shift()
}

console.log(values);

const vectors = PCA.getEigenVectors(values);

console.log(vectors);

const first = PCA.computePercentageExplained(vectors,vectors[0])
const topTwo = PCA.computePercentageExplained(vectors,vectors[0],vectors[1])

console.log(first);
console.log(topTwo);