// 11o

const letters = [
  "apple",
  "banana",
  "search",
  "menu",
  "contact",
  "search",
  "search",
];

function findIndex(array, word) {
  let index = -1;

  for (let i = 0; i < array.length; i++) {
    const arrayValue = array[i];

    if (arrayValue === word) {
      index = i;
      break;
    }
  }
  return index;
}

// console.log(findIndex(letters, "search"));
// console.log(findIndex(["red", "blue", "yellow", "blue"], "blue"));
// console.log(findIndex(["red", "blue", "yellow", "blue"], "yellow"));

function removeWords(array, word) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const arrayValue = array[i];
    console.log(arrayValue);

    if (arrayValue === word) {
      continue;
    } else {
      result.push(arrayValue);
    }
  }

  return result;
}

// console.log(removeWords(letters, "search"));

function removeFirstTwo(array, word) {
  const result = [];
  let countRepeatation = 0;

  for (let i = 0; i < array.length; i++) {
    const arrayValue = array[i];

    if (arrayValue === word && countRepeatation < 2) {
      countRepeatation++;
      continue;
    } else {
      result.push(arrayValue);
    }
  }

  return result;
}

// console.log(removeFirstTwo(letters, "search"));

function removeLastTwoValues(array, word) {
  const reverseArray = array.slice().reverse();
  const result = [];
  let countWords = 0;

  for (let i = 0; i < reverseArray.length; i++) {
    const reverseValue = reverseArray[i];
    console.log(reverseValue);

    if (reverseValue === word && countWords < 2) {
      countWords++;
      continue;
    } else {
      result.push(reverseValue);
    }
  }
  console.log(result.reverse());
}

// console.log(letters);
// removeLastTwoValues(letters, "search");
// console.log(letters);

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function fizzBuzz(array) {
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(number);
    }
  }
}

// fizzBuzz(numbers);

function removeDuplicate(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const arrayValue = array[i];

    if (findIndex(result, arrayValue) === -1) {
      result.push(arrayValue);
    }
  }
  return result;
}

console.log(removeDuplicate(letters));
console.log(removeDuplicate(["red", "blue", "red", "green"]));
