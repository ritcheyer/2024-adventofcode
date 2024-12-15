const fs = require('fs');
const { isSet } = require('util/types');

const isTest = false;

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

const isSetSafe = (current, next, initialDirection) => {

  if (next === undefined) return true;

  // Eliminate pairs if the difference is 0
  if (difference(current, next) === 0) {
    return false;
  }

  // Eliminate pairs if the difference is greater than 3
  if (difference(current, next) > 3) {
    return false;
  }

  // Eliminate pairs if the direction changes
  const currentDirection = current - next > 0 ? 'down' : 'up';
  if (initialDirection !== currentDirection) {
    return false;
  }
  return true;
};

const isRowSafe = (row) => {
  const initialDirection = row[0] > row[1] ? 'down' : 'up';

  for (let y = 0; y < row.length; y++) {
    let current = row[y];
    let next = row[y + 1];

    if (!isSetSafe(current, next, initialDirection)) {
      return false;
    }
  }
  return true;
};

const runProgram = (data) => {
  for (let x = 0; x < data.length; x++) {
    const row = data[x].split(' ').map(convertToNumber);

    if (isRowSafe(row)) {
      safeReports++;
    } else {

      /**
       * can i remove 1 value from the array and check if the array is still safe?
       */
      for (let z = 0; z < row.length; z++) {
        let rowCopy = [...row];
        rowCopy.splice(z, 1);

        if (isRowSafe(rowCopy)) {
          safeReports++;
          break;
        };
      }
    }
  }

  // console.log(data);
  console.log('safeReports', safeReports);
};

runProgram(datum);
