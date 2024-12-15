const fs = require('fs');

const isTest = false;

// turn the data into an array
if (isTest) {
  dataFile = `${__dirname}/data/02_demo.txt`;
  datum = fs.readFileSync(dataFile, 'utf8').toString();
} else {
  dataFile = `${__dirname}/data/02_data.txt`;
  datum = fs.readFileSync(dataFile, 'utf8').toString().split('\n');
}

// End Setup ============================================================

const runProgram = (data) => {
  let newData;

  if (isTest) {
    newData = data;
  } else {
    newData = data.join('');
  }

  const separator = /(do\(\))/i;
  const dontRegex = /(don\'t\(\))/g;
  const mulRegex = /(mul\(\d*,\d*\))/g;

  const result = newData.split(separator);
  const filterDo = result.filter((word) => word !== 'do()');

  let sum = 0, arrayOfValues = new Array();

  for (let index = 0; index < filterDo.length; index++) {
    const element = filterDo[index];
    const found = element.split(dontRegex);

    arrayOfValues.push(found[0]);
  }

  const flattenedArray = arrayOfValues.flat(Infinity);
  const resultString = flattenedArray.join(', ');
  const allMuls = resultString.match(mulRegex);

  for (let index = 0; index < allMuls.length; index++) {
    const element = allMuls[index];
    const [a, b] = element.match(/\d+/g);
    sum = sum + a * b;
  }

  console.log(sum);
};

runProgram(datum);