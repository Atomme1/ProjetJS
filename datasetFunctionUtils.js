import * as R from 'ramda';

const csvToJson = (csvfile, listcolumns) => R.compose(
    R.map(R.compose(
        R.zipObj(listcolumns),
        R.split(',')
    )),
    R.split('\r\n')
)(csvfile);

const dropColumns = R.drop(1);

const getpercentage = R.divide(R.__, 100);

const getIndexSplit = R.pipe(
    R.converge(R.multiply(getpercentage(80)), [R.length]),
    Math.round,
);

const doShuffle = R.sort(() => 0.5 - Math.random());

const splitInTrainingAndTesting = R.converge(R.splitAt, [getIndexSplit, R.identity]);

const getTraining = R.pipe(splitInTrainingAndTesting, R.head);
const getTesting = R.pipe(splitInTrainingAndTesting, R.last);

export {csvToJson, splitInTrainingAndTesting, getTraining, getTesting, dropColumns, doShuffle};

