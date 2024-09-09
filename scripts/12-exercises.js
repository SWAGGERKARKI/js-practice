/*
// 12.a
// create a varible 'add'
// save a function inside
// function will console.log(2 + 3)
// run the function twice
const add = function () {
  console.log(2 + 3);
};
add();
add();
*/

/*
// 12b
// continue from 12a
// create a function runTwice(fun), takes function as parameter and run twice
const add = function () {
  console.log(2 + 3);
};

add();
add();

function runTwice(fun) {
  fun();
  fun();
}

// passing function as argument
runTwice(function () {
  console.log('12b');
});

// passing function varibale as argument
runTwice(add);
*/

/*
// 12c
// create a button 'start'
// onclick it, after 1 sec, button text changed 'Start' to 'Finished!'
// 12d
// modify 12c, immediately changes to 'Loading...' and after some time changes to 'Finished'
function buttonTextChange() {
  const startButtonElement = document.querySelector('.js-start-button');
  console.log(startButtonElement);

  startButtonElement.innerHTML = `Loading...`;

  setTimeout(function () {
    startButtonElement.innerHTML = `Finished!`;
  }, 1000);
}
*/

/*
// 12e
// create a button 'add to cart'
// onclick, display 'added' below button
// after 2 sec, remove it
function addCart() {
  document.querySelector('.js-added').innerHTML = `added`;

  setTimeout(function () {
    document.querySelector('.js-added').innerHTML = ``;
  }, 2000);
}
*/

/*
// chanllenge
// 12f
// continue 12e
// onclick, wait 1 to 1.5 sec
let timeoutId;

function addCart() {
  document.querySelector('.js-added').innerHTML = `Added`;

  // clear the previous timeoutID
  // this makes the text not disappear so quickly
  clearTimeout(timeoutId);

  timeoutId = setTimeout(function () {
    document.querySelector('.js-added').innerHTML = ``;
  }, 2000);
}
*/

/*
// 12g
// change document.title from app to new messages(2) every 1 sec
document.title = `App`;
// function titleChange() {
//   setTimeout(function () {
//     document.title = `New messages(2)`;
//   }, 1000);

//   setTimeout(function () {
//     document.title = `App`;
//   }, 2000);
// }

// setInterval(function () {
//   titleChange();
// }, 2000);
setInterval(function () {
  if (document.title === 'App') {
    document.title = `New messages(2)`;
  } else {
    document.title = 'App';
  }
}, 1000);
*/

/*
// 12g
// continue from 12f
// the message number should be variable
document.title = 'Add';
let messages = 2;
let intervalId;
let isDisplayNotification;

displayNotification();

function displayNotification() {
  if (isDisplayNotification) {
    return;
  }

  isDisplayNotification = true;
  console.log(isDisplayNotification);

  intervalId = setInterval(function () {
    if (document.title === 'Add') {
      document.title = `(${messages}) New messages`;
    } else {
      document.title = 'Add';
    }
  }, 1000);
}

function stopNotification() {
  isDisplayNotification = false;

  clearInterval(intervalId);
  document.title = 'Add';
}
*/

/*
// 12j
// create an arrow-function 'multiply'
// takes two argument and returns multiplications
const result = (intOne, intTwo) => {
  return intOne * intTwo;
};

console.log(result(2, 3));
console.log(result(2, 5));
console.log(result(2.1, 5.6));
*/

/*
// 12k
// apply one line arrow-function to 12j
const result = (intOne, intTwo) => intOne * intTwo;

console.log(result(4, 5));
*/

/*
// 12l
// create a function 'countPositive'
// which takes array as an argument
// and counts how many numbers are positive in the array
// use forEach() loop instead
const myArray = [1, 2, 3, -6, -9, 4];
function countArray(array) {
  const newArray = [];

  array.forEach((value, index) => {
    if (value >= 0) {
      newArray.push(value);
    }
  });

  console.log(`total positive numbers in array: ${newArray.length}`);
}

countArray(myArray);
countArray([2, 5, -5]);
*/

/*
// 12m
// create a function addNum
// that takes two argument array and num
// and return new array with adding num to each array element
// use map instead of for loop
const myArray = [1, 2, 5, 6, 7];

function addNum(arrayInput, num) {
  console.log(arrayInput.map((value, index) => value + num));
}

addNum(myArray, 4);
*/

/*
// 12n
// create a function removeEgg()
// to remove egg from the array
// using filter() method instead of loop
const food = ['apple', 'egg', 'pineapple', 'egg', 'egg', 'banana'];

function removeEgg(myArray) {
  const newArray = myArray.filter((value, index) => {
    if (!(value === 'egg')) {
      return value;
    }
  });

  return newArray;
}

console.log(removeEgg(food));
*/

/*
// 12o
// modify 12n to remove only first two eggs from the array
const food = ['apple', 'egg', 'pineapple', 'egg', 'egg', 'banana'];
let eggCount = 0;

function removeFirstTwoEgg(myArray) {
  const newArray = myArray.filter((value, index) => {
    if (value === 'egg' && eggCount < 2) {
      eggCount++;
    } else {
      return value;
    }
  });

  return newArray;
}

console.log(removeFirstTwoEgg(food));
*/

// 12p
// 12c & 12i code - switch it back to arrow function

/*
// 12c
// create a button 'start'
// onclick it, after 1 sec, button text changed 'Start' to 'Finished!'
// 12d
// modify 12c, immediately changes to 'Loading...' and after some time changes to 'Finished'
const buttonTextChange = () => {
  const startButtonElement = document.querySelector('.js-start-button');
  console.log(startButtonElement);

  startButtonElement.innerHTML = `Loading...`;

  setTimeout(() => {
    startButtonElement.innerHTML = `Finished!`;
  }, 1000);
};

// selecting start button html element
startButtonElement = document.querySelector('.js-start-button');

// adding click event listener for start button
startButtonElement.addEventListener('click', () => buttonTextChange());

// adding keydown event listener for start button
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'c') {
    buttonTextChange();
  }
});
*/

/*
// 12e
// create a button 'add to cart'
// onclick, display 'added' below button
// after 2 sec, remove it
const addCart = () => {
  document.querySelector('.js-added').innerHTML = `added`;

  setTimeout(() => {
    document.querySelector('.js-added').innerHTML = ``;
  }, 2000);
};

const addButtonElement = document.querySelector('.js-add-button');

addButtonElement.addEventListener('click', () => {
  addCart();
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addCart();
  }
});
*/

/*
// chanllenge
// 12f
// continue 12e
// onclick, wait 1 to 1.5 sec
let timeoutId;

const addCart = () => {
  document.querySelector('.js-added').innerHTML = `Added`;

  // clear the previous timeoutID
  // this makes the text not disappear so quickly
  clearTimeout(timeoutId);

  timeoutId = setTimeout(() => {
    document.querySelector('.js-added').innerHTML = ``;
  }, 2000);
};

const addButtonElement = document.querySelector('.js-add-button');

addButtonElement.addEventListener('click', () => {
  addCart();
});
*/

/*
// 12g
// change document.title from app to new messages(2) every 1 sec
document.title = `App`;
// function titleChange() {
//   setTimeout(function () {
//     document.title = `New messages(2)`;
//   }, 1000);

//   setTimeout(function () {
//     document.title = `App`;
//   }, 2000);
// }

// setInterval(function () {
//   titleChange();
// }, 2000);
setInterval(() => {
  if (document.title === 'App') {
    document.title = `New messages(2)`;
  } else {
    document.title = 'App';
  }
}, 1000);
*/

/*
// 12g
// continue from 12f
// the message number should be variable
document.title = 'Add';
let messages = 2;
let intervalId;
let isDisplayNotification;

const displayNotification = () => {
  if (isDisplayNotification) {
    return;
  }

  isDisplayNotification = true;

  intervalId = setInterval(() => {
    if (document.title === 'Add') {
      document.title = `(${messages}) New messages`;
    } else {
      document.title = 'Add';
    }
  }, 1000);
};

displayNotification();

const stopNotification = () => {
  isDisplayNotification = false;

  clearInterval(intervalId);
  document.title = 'Add';
};

const addButtonElement = document.querySelector('.js-add-button');
const removeButtonElement = document.querySelector('.js-remove-button');

console.log(addButtonElement);
console.log(removeButtonElement);

addButtonElement.addEventListener('click', () => {
  messages++;
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === '+') {
    messages++;
  }
});

removeButtonElement.addEventListener('click', () => {
  if (messages > 0) {
    messages--;

    if (messages === 0) {
      stopNotification();
    }
  }
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === '-') {
    if (messages > 0) {
      messages--;

      if (messages === 0) {
        stopNotification();
      }
    }
  }
});
*/
