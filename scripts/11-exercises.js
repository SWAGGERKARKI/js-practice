/*
// 11a
const nums = [10, 20, 30];
console.log(nums);
nums[2] = 99;
console.log(nums);
*/

/*
// 11b
function getLastValue(array) {
  const lastIndex = array.length - 1;
  console.log(array[lastIndex]);
}

getLastValue([1, 20, 22, 24, 5]);
getLastValue(["hi", "hello", "good"]);
*/

// 11c
/*
function arraySwap(array) {
  firstIndex = 0;
  lastIndex = array.length - 1;
  const swap = array[firstIndex];
  array[firstIndex] = array[lastIndex];
  array[lastIndex] = swap;
  return array;
}

const newArray = arraySwap([1, 20, 22, 24, 5]);
console.log(newArray);

const newArrayString = arraySwap(["hi", "hello", "good"]);
console.log(newArrayString);
*/

// 11d
/*
for (let i = 0; i <= 10; i = i + 2) {
  console.log(i);
}
*/

// 11f
/*
for (let i = 5; i >= 0; i--) {
  console.log(i);
}
*/

// 11g
/*
const numArray = [1, 2, 3];
const newArray = [];

for (let i = 0; i < numArray.length; i++) {
  const number = numArray[i] + 1;
  newArray.push(number);
}

console.log(numArray);
console.log(newArray);
*/

// 11h
/*
function addOne(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const number = array[i] + 1;
    newArray.push(number);
  }
  return newArray;
}

console.log(addOne([1, 2, 3]));
console.log(addOne([-2, -1, 0, 99]));
console.log(
  addOne(["sag", "eeer", true, false, 4.5, null, undefined, NaN, +"2", -"4"])
);
*/

// 11i
/*
function addNum(array, num) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    const number = array[i] + num;
    newArray.push(number);
  }
  return newArray;
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([1, 2, 3], 3));
console.log(addNum([-2, -1, 0, 99], 2));
*/

// 11j

// const arrayOne = [1, 2, 3];
// const arrayTwo = [1, 2, 3];
// console.log(arrayOne[0] + arrayTwo[0]);
// console.log(arrayOne[1] + arrayTwo[1]);
// console.log(arrayOne[2] + arrayTwo[2]);

// function addArrays(array1, array2) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i++) {
//     const number1 = array1[i];
//     for (let j = i; j <= i; j++) {
//       const number2 = array2[j];
//       newArray.push(number1 + number2);
//     }
//   }
//   return newArray;
// }

// console.log(addArrays([1, 2, 3], [1, 2, 3]));
// console.log(addArrays([1, 1, 3], [1, 1, 3]));
// console.log(addArrays([1, 2, 3], [4, 5, 6]));

// function newAddTwoArray(array1, array2) {
//   const newArray = [];

//   for (let i = 0; i < array1.length; i++) {
//     newArray.push(array1[i] + array2[i]);
//   }
//   return newArray;
// }

// console.log(newAddTwoArray(arrayOne, arrayTwo));

// 11k
/*
const numArray = [1, 2, 3, 0, -9, -8];
const newArray = [];
for (let i = 0; i <= numArray.length; i++) {
  const number = numArray[i];
  if (number > 0) {
    console.log(number);
    newArray.push(number);
  }
}
const countPositiveNumber = newArray.length - 1;
console.log(`Positive numbers: ${countPositiveNumber}`);

function countPositive(array) {
  const newArray = [];
  let countPositiveNum = 0;
  for (let i = 0; i < array.length; i++) {
    const number = array[i];
    if (number > 0) {
      newArray.push(number);
    }
  }
  countPositiveNum = newArray.length;
  return countPositiveNum;
}

console.log(countPositive([1, 2, 3, 0, -9, -8]));
console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));
*/

// 11i & 11m

// const myArray = [1, 45, 6, 7, 35, -9];
// // console.log(Math.max(1, 45, 6, 7, 35));
// const obj = {
//   maxNum: 0,
//   minNum: 0,
// };
// for (let i = 0; i < myArray.length; i++) {
//   const maxNumber = myArray[i];
//   if (maxNumber > obj.maxNum) {
//     obj.maxNum = maxNumber;
//   }
// }

// for (let i = 0; i < myArray.length; i++) {
//   const minNumber = myArray[i];
//   obj.minNum = myArray[0];
//   if (minNumber < obj.minNum) {
//     obj.minNum = minNumber;
//   }
// }

// console.log(`max num: ${obj.maxNum}`);

// console.log(`min num: ${obj.minNum}`);

// function findMinMaxNum(array) {
//   const maxminObj = {
//     minNum: 0,
//     maxNum: 0,
//   };

//   if (array.length === 0) {
//     console.log("Please enter non-empty array");
//     return;
//   } else if (array.length === 1) {
//     console.log("Array should have atleat two values");
//     return;
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       const minNumber = array[i];
//       const maxNumber = array[i];
//       maxminObj.minNum = array[0];
//       if (minNumber < maxminObj.minNum) {
//         maxminObj.minNum = minNumber;
//       }

//       if (maxNumber > maxminObj.maxNum) {
//         maxminObj.maxNum = maxNumber;
//       }
//     }
//   }
//   return maxminObj;
// }

// console.log(findMinMaxNum([3, 7, 9, -4]));

// // simple method

// const arrayOfNumbers = [2, 5, 10, 10000, -8889];

// function newFindMaxMin(array) {
//   let max = 0;
//   let min = 0;

//   for (let i = 0; i < arrayOfNumbers.length; i++) {
//     const num = arrayOfNumbers[i];
//     if (num > max) {
//       max = num;
//     }
//     if (num < min) {
//       min = num;
//     }
//   }

//   const objMaxMin = {
//     max: max,
//     min: min,
//   };

//   return objMaxMin;
// }

// console.log(newFindMaxMin(arrayOfNumbers));

// 11n
// const fruitArray = ["apple", "grape", "apple", "apple", "grape"];

// // using Object.key() method
// function countVlaues(array) {
//   let count = 0;

//   const countObj = {};

//   for (let j = 0; j < fruitArray.length; j++) {
//     const fruit = fruitArray[j];
//     countObj[fruit] = count;
//   }

//   const objPropertyArray = Object.keys(countObj);

//   for (let i = 0; i < objPropertyArray.length; i++) {
//     const countObjname = objPropertyArray[i];
//     for (let j = 0; j < fruitArray.length; j++) {
//       if (countObjname === fruitArray[j]) {
//         countObj[countObjname]++;
//       }
//     }
//   }
//   return countObj;
// }

// console.log(countVlaues(fruitArray));

// // simple method

// objFruit = {};

// for (let i = 0; i < fruitArray.length; i++) {
//   const fruit = fruitArray[i];

//   if (objFruit[fruit]) {
//     objFruit[fruit] = objFruit[fruit] + 1;
//   } else {
//     objFruit[fruit] = 1;
//   }
// }

// console.log(objFruit);

// Extra
// const myArray = [2, 7, 8, 9, 4];

// const newArrayEven = [];
// const newArrayOdd = [];

// const newEvenOddObj = {};

// for (let i = 0; i < myArray.length; i++) {
//   const num = myArray[i];
//   if (num % 2 === 0) {
//     newArrayEven.push(num);
//   } else {
//     newArrayOdd.push(num);
//   }
// }

// for (let i = 0; i < myArray.length; i++) {
//   const num = myArray[i];
//   if (newEvenOddObj["even"] && newEvenOddObj["odd"]) {
//     if (num % 2 === 0) {
//       newEvenOddObj["even"] += num;
//     } else {
//       newEvenOddObj["odd"] += num;
//     }
//   } else {
//     if (num % 2 === 0) {
//       newEvenOddObj["even"] = num.toString();
//     } else {
//       newEvenOddObj["odd"] = num.toString();
//     }
//   }
// }

// const evenOddObj = {
//   even: newArrayEven,
//   odd: newArrayOdd,
// };

// console.log(newArrayEven);
// console.log(newArrayOdd);

// console.log(evenOddObj.even);
// console.log(evenOddObj.odd);
// console.log(evenOddObj);

// console.log(newEvenOddObj);
