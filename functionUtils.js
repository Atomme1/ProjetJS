import * as R from 'ramda';

const csvToJson = (csvfile, listcolumns) => R.compose(
    R.map(R.compose(
        R.zipObj(listcolumns),
        R.split(',')
    )),
    R.split('\r\n')
)(csvfile)

const dropColumns = (list) => R.drop(1,list)

const getpercentage = (percentage) => R.divide(percentage,100);

const getIndexSplit = R.pipe(
    R.converge(R.multiply(getpercentage(80)), [R.length]),
    Math.round,
);

const splitInTrainingAndTesting = R.converge(R.splitAt,[getIndexSplit,R.identity]);

const getTraining = R.pipe(splitInTrainingAndTesting,R.head);
const getTesting = R.pipe(splitInTrainingAndTesting,R.last);


export { csvToJson, splitInTrainingAndTesting, getTraining, getTesting , dropColumns};

