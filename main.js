console.log("Hero");
// string is one of seven primitive datatypes in js
// string sequence of characters enclosed by single and double quotes
// it is immutable
console.log(5);
// number is one of seven primitive datatypes in js
// number is not elcosed by quotes

let fullName = "Sagar Karki";
let age = 30;
// variable points to memory address that stores value
// when variable is not initialized then it gives undefined value
// undefined is special datatype that represent value that does not have definition yet
// undefined is default value of uninitialized variable
// let keyword is used to declare variable and the value of variable can be changed throughout the code
console.log(fullName);
console.log(age);

let arrName = ["Ram", "Hari", "Sita", "Gita"]
// Array is ordered collection of element, elements separated by comma
console.log(arrName[0]);
// Array element can be accessed by using index and bracket notation, this is zero indexed
arrName[0] = "Laxman";
// Array is mutable
console.log(arrName);

const count = arrName.length;
let result = ""
for (let i = 0; i < count; i = i + 1) {
  console.log(arrName[i]);
}

// for loop is used when a task should be execute repeatedly until condition is met
// for loop is control structure which executes a code repeatedly as long as specified condition is met

for (let i of arrName) {
  console.log(i);
}

// Js methods: .push() & .pop()
// .push() adds element at the end of an array
// .pop() removes last element from an array
arrName.push("Rawan");
console.log(arrName);
console.log(arrName.push("Sagar"));
console.log(arrName.push());
arrName.pop();
console.log(arrName);
console.log(arrName.pop());
console.log(arrName);