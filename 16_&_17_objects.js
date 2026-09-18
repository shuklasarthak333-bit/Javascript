// --------- part 1 start -----------
const  Obj = {
    fname:"sarthak",
    lname:"shukla",
    age:20,
    isloggedin:false
}

console.log(Obj.fname);
console.log(Obj["lname"]);

// // task : to take symbol and print it as a symbol from object

// const sym = Symbol("hello");
// const sym1 = Symbol("bye");

// const task = {
//     sym : "key1",
//     [sym1] : "key2"
// };

// console.log(task["sym"]);  --> gets printed as a symbol
// console.log(sym1);  --> doesn't get printed as symbol

// freeze can be used to freeze the data of the object such that after the freeze statement no changes will be done to the object.

// Obj.lname = "Atul";
// console.log(Obj.lname);
// Object.freeze(Obj);
// Obj.lname = "dabba";
// console.log(Obj.lname);

// function using Object

Obj.greeting = function(){
    console.log("Hello!!!");
}

// function to print the same object's value stored in key lname

Obj.greeting0 = function(){
    console.log(`Hello!!! ${this.lname}`);
}

console.log(Obj.greeting0());

//------- part 1 ends --------

// ----- part 2 start -----