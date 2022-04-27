const R = require('ramda');

const csvToArray = csvText =>
  csvText
    .split('\n')
    .map(item => item.split(','))
    // new line will produce Array with length 1 & with value ''
    // ignore it
    .filter(item => item[0] !== '');

const csvArrayToObject = csvArray => {
  // array[0] expected as headers
  const headerArray = csvArray[0];
  const bodyArray = R.drop(1, csvArray);
  return bodyArray.map(body => {
    const newObj = new Object();
    body.forEach((bodyItem, index) => {
      const key = headerArray[index];
      // ignore if the body is overlength than key
      // that mean key is undefined
      if (!key) return;
      newObj[key] = bodyItem.replace('\r', '').replace('\n', '');
    });
    return newObj;
  });
};

const csvToObject = csvText => R.compose(csvArrayToObject, csvToArray)(csvText);

const objectToCsv = csvObj => {
  if (!Array.isArray(csvObj))
    throw new Error('input must be an Array of object');

  const headerText = R.keys(csvObj[0])
    .join(',')
    .concat('\n');
  const bodyText = csvObj.map(item => R.values(item).join(',')).join('\n');
  return headerText.concat(bodyText);
};

module.exports = {
  csvToArray,
  csvArrayToObject,
  csvToObject,
  objectToCsv,
};
