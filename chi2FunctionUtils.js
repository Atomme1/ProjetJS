import * as R from 'ramda';
import chi2test from '@stdlib/stats-chi2test';

const getObservedValues = R.pipe(
    R.pluck('Species'),
    R.countBy(R.identity),
    R.values
);

const getNumberOfOutput = R.pipe(
    getObservedValues,
    R.length
);

const getExpectedValues = R.converge(
    R.repeat,[
        R.converge(R.multiply,[
        R.converge(R.divide(1),[getNumberOfOutput]),
        R.length
        ]),
        getNumberOfOutput
    ]
);

const getListObservedAndExpected = R.pipe(
    R.applySpec({
        observed: getObservedValues,
        expected: getExpectedValues,
    }),
    R.values,

);

const getChi2 = data => chi2test(getListObservedAndExpected(data));

export {  getChi2,getExpectedValues, getObservedValues,getListObservedAndExpected};