const fs = require('fs');

const IS_TEST = false;

// turn the data into an array
if (IS_TEST) {
  dataFile = `${__dirname}/data/test.txt`;
} else {
  dataFile = `${__dirname}/data/input.txt`;
}

const datum = fs.readFileSync(dataFile, 'utf8').split('\n')

/**
 * Find smallest on the left side
 * Find smallest on the right side
 * Pair the numbers up
 * Find the difference between the pairs
 * Add the distances up
 */

const difference = (a, b) => {
  return Math.abs(a - b);
}

/**
 * Split the digits,
 * @returns {Array} of the split digits as numbers.
 */
const splitDigits = (num) => {
  const digitPair = num.toString().split(',');

  const leftSideArray = [];
  const rightSideArray = [];

  // convert the strings to numbers and push them into new arrays
  for (const pair in digitPair) {
    const digit = digitPair[pair].split('   ');
    leftSideArray.push(Number(digit[0]));
    rightSideArray.push(Number(digit[1]));
  }

  // sort the arrays
  leftSideArray.sort();
  rightSideArray.sort();

  let sum = 0;

  for (let i = 0; i < leftSideArray.length; i++) {
    sum += difference(leftSideArray[i], rightSideArray[i]);
  }

  console.log(sum);

}

const findSmallest = (arr, index) => {
  splitDigits(arr);
};

findSmallest(datum, datum.length);