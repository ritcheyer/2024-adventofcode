const fs = require('fs');
const { isSet } = require('util/types');

const isTest = true;

// turn the data into an array
if (isTest) {
  dataFile = `${__dirname}/data/test.txt`;
} else {
  dataFile = `${__dirname}/data/input.txt`;
}
const datum = fs.readFileSync(dataFile, 'utf8').toString().split('\n');

// End Setup ============================================================

const runProgram = (data) => {

  console.log(data);
};

runProgram(datum);