import * as R from 'ramda';
import * as fs from 'fs';


import {csvToJson} from "./datasetFunctionUtils.js";
const csv = fs.readFileSync('./CSV_file/Iris.csv', 'utf8')
const columns = ['Id','SepalLengthCm','SepalWidthCm','PetalLengthCm','PetalWidthCm','Species']

const dataset = csvToJson(csv,columns);

//non fonctionelle
function randomize(arr) {
    var i, j, tmp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
    return arr;
}
var arr = dataset;
arr = randomize(arr);
console.log(arr);

//fonctionelle
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

var arr = dataset;
arr = shuffleArray(arr);
console.log(arr);