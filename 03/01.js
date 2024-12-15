const fs = require('fs');

const isTest = false;

// turn the data into an array
if (isTest) {
  dataFile = `${__dirname}/data/demo.txt`;
} else {
  dataFile = `${__dirname}/data/data.txt`;
}
const datum = fs.readFileSync(dataFile, 'utf8').toString();

// End Setup ============================================================

const runProgram = (data) => {
  const re = /(mul\(\d*,\d*\))/g;
  const found = data.match(re);

  let sum = 0;

  for (let index = 0; index < found.length; index++) {
    const element = found[index];
    const [a, b] = element.match(/\d+/g);
    sum = sum + (a * b);
  }

  console.log(sum);
};

runProgram(datum);