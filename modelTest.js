//libraries import
import * as R from 'ramda';
import * as fs from 'fs';
import { getValues} from "./PCAFunctionUtils.js";
import { KNeighborsRegressor } from 'scikitjs';

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

const getLabels = R.pipe(
    R.map(R.last)
)

let X = [[0], [1], [2], [3]];
let y = [0, 0, 1, 1];

let knn = new KNeighborsRegressor(nNeighbor);

await knn.fit(X, y);

knn.predict([[1.5]]).print();