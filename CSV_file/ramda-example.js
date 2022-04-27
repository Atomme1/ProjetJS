const R = require('ramda')
const fs = require('fs')
const csv = fs.readFileSync('./data.csv', 'utf8')
const columns = ['actor', 'character', 'episodes']

const csvToJson = R.compose(
  R.map(R.compose(
    R.evolve({episodes: Number}),
    R.zipObj(columns),
    R.split(',')
  )),
  R.split('\n')
)(csv)

console.log(csvToJson)
