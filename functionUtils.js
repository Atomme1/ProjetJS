import * as R from 'ramda';

const csvToJson = (csvfile, listcolumns) => R.compose(
    R.map(R.compose(
        R.zipObj(listcolumns),
        R.split(',')
    )),
    R.split('\n')
)(csvfile)

//On doit séparer le dataset shuffle en deux datasets
//Training set 80% des données et test set 20%

const TrainTestSplit = (dataset,pourcentage) => R.pipe(

    R.splitAt(Math.round(R.length(dataset) * (pourcentage / 100)), dataset)

)


//console.log(num);

const datasetTrainTest = R.splitAt(num,dataset);
const datasetTrain = datasetTrainTest[0];
const datasetTest = datasetTrainTest[1];
console.log(datasetTrainTest[1]);

console.log(R.length(datasetTrain))

 */


export { csvToJson, TrainTestSplit};

