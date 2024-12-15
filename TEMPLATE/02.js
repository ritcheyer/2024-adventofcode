const fs = require('fs');

const isTest = true;

// turn the data into an array
if (isTest) {
  dataFile = `${__dirname}/data/test.txt`;
} else {
  dataFile = `${__dirname}/data/input.txt`;
}

const datum = fs.readFileSync(dataFile, 'utf8').split('\n')
console.log(datum)