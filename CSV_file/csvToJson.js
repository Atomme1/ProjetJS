import * as R from 'ramda';

const csvToJson = (csvfile, listcolumns) => R.compose(
    R.map(R.compose(
        R.zipObj(listcolumns),
        R.split(',')
    )),
    R.split('\n')
)(csvfile)

export default csvToJson;

