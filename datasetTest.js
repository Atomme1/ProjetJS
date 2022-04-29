import * as R from 'ramda';
import * as fs from 'fs';

import {csvToJson} from "./datasetFunctionUtils.js";

const csv = fs.readFileSync('./CSV_file/Iris.csv', 'utf8')
const columns = ['Id','SepalLengthCm','SepalWidthCm','PetalLengthCm','PetalWidthCm','Species']

const dataset = csvToJson(csv,columns);

const getFirstLine = R.prop(0)

const getCSV = R.pipe(
    fs.readFileSync,
    R.toString,
    R.split('\r\n')
)

const getCSV2 = (path) => fs.readFileSync(path,'utf8');

const dropColumns =  R.drop(1,R.identity)

const getColumns = R.converge(getFirstLine,[getCSV])

const getColumnsToList = (str) => str.split(",")

console.log(getCSV2('./CSV_file/Iris.csv'))

//console.log(dropColumns(getCSV('./CSV_file/Iris.csv')))

//console.log(getColumns('./CSV_file/Iris.csv'))
//console.log(getColumnsToList(getColumns('./CSV_file/Iris.csv')))

const path = './CSV_file/Iris.csv'
console.log(getCSV2(path))
//const data = csvToJson(getCSV2(path),getColumnsToList(getColumns(path)))

//console.log(dropColumns(data))

//console.log(dataset)
