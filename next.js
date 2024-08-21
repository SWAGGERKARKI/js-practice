let character = "#"; // initialization of character variable with hash value
console.log(character); // printing value of hash character on console
let rows = []; // initialization of rows varibale with empty array
console.log(rows); // printing the value of rows varible on console
let result = ""; // initialization of variable result with empty string
console.log(result); // printing the value of variable result on console
const count = 8; // initialization of varibale count by const keyword and value of 8

// creating control structure, for loop to generate array with value of i
// change the pushing value from i to character
// adding repeat method to the character
// repeat method takes one argument which is number to evaluate how many times string should be repeated
for (let i = 0; i < count; i = i + 1) {
  console.log(rows.push(padRow(i + 1, count))); // total number of elements
}

console.log(rows); // printing the varible rows which has values in array

// for.. of control structure, which iterates over iterable objects
// result = result + row; // this will concatenate all the elements of an array
// addding between "\n", makes all elements start form new line means all make it horizontal

for (const row of rows) {
  result = result + "\n" + row; // value of elements
}

console.log(result);

// function: a block code which can be reused frequently throughout the application
// fucntion should be with or without varible inside the parenthesis which is called parameters
// function can have multiple parameters separated by comma
// varibale declared outside of any block statement is called global scope varibale and inside is called local scope varibale
// return keyword is used to return the output of function
// let title = "professor"
function padRow(rowNumber, rowCount) {
  // let surName = "Karki";
  // console.log(title + surName);
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// call the function to execute the block of code
// if the function declaration have its parameters then to execute the function exact number of varible should be passed while calling the function
// variable inside the parethesis is called arguments
// when function returns the value it should be stored in the variable
// result = padRow(6, 7);
// console.log(result);