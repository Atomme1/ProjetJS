import * as R from 'ramda';
import * as fs from 'fs';

//On doit séparer le dataset shuffle en deux datasets
//Training set 80% des données et test set 20%

/*
const co = fs.readFileSync('./CSV_file/Iris.csv').toString().split('\r\n')
const coa = co[0]

console.log(co);
*/

const firstOrNull = R.propOr(null, 0)

const arr1 = ["string1", "string2"]
const arr2 = []

console.log(firstOrNull(arr1))
console.log(firstOrNull(arr2))

const getCSV = (path) => fs.readFileSync(path).toString().split('\r\n')

const getColumns = (path) => firstOrNull(getCSV(path))

console.log(getColumns('./CSV_file/Iris.csv'))

