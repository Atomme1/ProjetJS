import * as fs from 'fs';
import * as R from 'ramda';
import PCA from 'pca-js';

const getValues = R.pipe(
    R.map(
        R.pipe(
            R.values,
            R.drop(1),
            R.dropLast(1),
        )
    )
);

const getVectors = R.pipe(
    getValues,
    PCA.getEigenVectors
);

const first = R.pipe(
    getVectors,
    R.converge(PCA.computePercentageExplained, [R.identity, R.prop(0)]),
);

const topTwo = R.pipe(
    getVectors,
    R.converge(PCA.computePercentageExplained, [R.identity, R.prop(0), R.prop(1)]),
);

export {getValues, getVectors, first, topTwo};
