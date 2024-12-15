const fs = require('fs');

const isTest = false;

// turn the data into an array
if (isTest) {
  dataFile = `${__dirname}/data/test.txt`;
} else {
  dataFile = `${__dirname}/data/input.txt`;
}

const datum = fs.readFileSync(dataFile, 'utf8').split('\n')

// End Setup ============================================================

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

  let combinedArray = [];
  let sum = 0;
  // Find the matching numbers in the right side array that match the index of the left array.
  for (let i = 0; i < leftSideArray.length; i++) {

    matchingIndex = leftSideArray.filter((num) => num === rightSideArray[i]);

    if (matchingIndex.length !== 0) {
      combinedArray.push(matchingIndex);
    }
    combinedArray = combinedArray.flat();
  }

  combinedArray.forEach((num) => {
    sum += num;
  });

  // log out the sum
  console.log(sum);

}

splitDigits(datum);