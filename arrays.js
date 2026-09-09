// arrays can be of different types in js and they are resizable like vectors in cpp
const arr = [0,"hello!",2,3,4,5,6];
//another way to declare an array
// const arr = new Array(1,2,3,"hello",4,5);
// console.log(Narr[1]);
console.log(arr[1]);
console.log(arr);

// copy operations in JS create shallow copies of arrray i.e., same reference point (changes made will be made to the original)

// Array METHODS

arr.push("BYE"); // pushes the element at the end of the array
arr.push(5)
arr.pop(); // pop the last element in the array
arr.unshift("yellow"); // adds the element at the start of the array , although not the optimised way to do so
arr.shift(); // removes the element at the start from the array
arr.shift();
console.log(arr);
console.log(arr.includes("hello!")); // gives true or false if the element is present or not.
console.log(arr.indexOf(3)); // returns the index if the element is present in array, if not then it return -1

const new_arr = arr.join(); // convert all the values of array to strings
console.log(new_arr);
console.log(typeof new_arr);

const newarr = [1,2,3,4,5,6,7,8];
console.log("before Splice",newarr);
console.log("Slice",newarr.slice(1,4)); // sends a copy of the chosen indexes (last index not included)
const Sp = newarr.splice(1,4); // remove the indexes completely from the array ( last index included)
console.log(Sp); 
console.log("after Splice",newarr);