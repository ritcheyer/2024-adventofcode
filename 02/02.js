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

let safeReports = 0;

const convertToNumber = (element) => {
  return Number(element);
};

function difference(a, b) {
  return Math.abs(a - b);
}

const isSetSafe = (current, next, setDirection) => {
  if (next === undefined) return true;

  if (difference(current, next) === 0) {
    return false;
  }

  // Eliminate pairs when the difference is greater than 3
  if (difference(current, next) > 3) {
    return false;
  }

  // Eliminate pairs when the direction changes
  // Determine the direction of the current step
  let currentDirection = current - next > 0 ? 'down' : 'up';
  if (setDirection !== currentDirection) {
    return false;
  }
  return true;
};

const isRowSafe = (row) => {
  let setDirection = row[0] > row[1] ? 'down' : 'up';
  for (let y = 0; y < row.length; y++) {
    let current = row[y];
    let next = row[y + 1];

    if (!isSetSafe(current, next, setDirection)) return false;
  }
  return true;
};

const runProgram = (data) => {
  for (let x = 0; x < data.length; x++) {
    const row = data[x].split(' ').map(convertToNumber);

    if (isRowSafe(row)) {
      safeReports++;
    }
  }

  console.log(data);
  console.log('safeReports', safeReports);
};

runProgram(datum);
