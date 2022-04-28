import * as R from 'ramda';
import * as Z from 'zebras';
import * as fs from 'fs';
import csvToJson from "./CSV_file/csvToJson.js";

const csv = fs.readFileSync('./CSV_file/Airplane_Crashes_and_Fatalities_Since_1908_2019.csv', 'utf8')
const columns = ['Date','Time','Location','Operator','Flight #','Route','AC Type','Registration','cn/ln','Aboard','Aboard Passangers','Aboard Crew','Fatalities','Fatalities Passangers','Fatalities Crew','Ground','Summary']

const dataset = csvToJson(csv,columns);
console.log(dataset);



