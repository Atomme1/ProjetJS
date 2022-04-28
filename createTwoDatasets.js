import * as R from 'ramda';
import * as fs from 'fs';

import { csvToJson, TrainTestSplit} from "./functionUtils.js";

const csv = fs.readFileSync('./CSV_file/Iris.csv', 'utf8')
const columns = ['Id','SepalLengthCm','SepalWidthCm','PetalLengthCm','PetalWidthCm','Species']

//analysis of the csv
const dataset = csvToJson(csv,columns);

const firstOrNull = R.propOr(null, 0)

const getCSV = (path) => fs.readFileSync(path).toString().split('\r\n')

const getCSV2 = (path) => fs.readFileSync(path, 'utf8')

const dropColumns = (list) => R.drop(1,list)

const getColumns = (path) => firstOrNull(getCSV(path))

const getColumnsList = (path) => R.map(
    firstOrNull(getCSV(path)),
    R.split(',')
)

//console.log(dropColumns(dataset))

console.log(getColumnsList('./CSV_file/Iris.csv'))

const path = './CSV_file/Iris.csv'

const data = csvToJson(getCSV2(path),getColumns(path))

//console.log(dropColumns(data))

//console.log(dataset)

