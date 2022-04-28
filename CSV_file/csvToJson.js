import * as R from 'ramda';
import * as fs from 'fs';

const csv = fs.readFileSync('./CSV_file/Airplane_Crashes_and_Fatalities_Since_1908_2019.csv', 'utf8')
const columns = ['Date','Time','Location','Operator','Flight #','Route','AC Type','Registration','cn/ln','Aboard','Aboard Passangers','Aboard Crew','Fatalities','Fatalities Passangers','Fatalities Crew','Ground','Summary']

const csvToJson = (csvfile, listcolumns) => R.compose(
    R.map(R.compose(
        R.zipObj(listcolumns),
        R.split(',')
    )),
    R.split('\n')
)(csvfile)

export default csvToJson;

