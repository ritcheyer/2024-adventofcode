const fs = require('fs');

const isTest = true;

// turn the data into an array
if (isTest) {
  dataFile = `${__dirname}/data/test.txt`;
} else {
  dataFile = `${__dirname}/data/input.txt`;
}

const datum = fs.readFileSync(dataFile, 'utf8').toString().split('\n');

const convertToNumber = (element) => {
  return Number(element);
}

const runProgram = (data) => {
  console.log(data);
};

runProgram(datum);
