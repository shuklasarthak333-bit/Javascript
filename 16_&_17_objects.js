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

// Nesting of Objects

const credentials = {
    fullname : {
        firstName : "Sarthak",
        lastName : "Shukla",
        Special:{
            nickname : "Impala"
        }
    },
    Section : 24,
    Age : 20 
};

console.log(credentials.fullname.Special.nickname);

// merging two or more objects

const obj1 = {
    1:"abc",
    2:"xyz"
};
const obj2 = {
    3:"abc",
    4:"xyz"
};
const obj3 = {
    5:"abc",
    6:"xyz"
};

const obj4=(obj1,obj2,obj3);
console.log(obj4);
const obj5 = Object.assign({},obj1,obj2,obj3) // assign function
console.log(obj5);
const obj6 = {...obj1, ...obj2, ...obj3}; // spread
console.log(obj6);

 // to print all the keys and values in form of an array

console.log(Object.keys(obj5));
console.log(Object.values(obj5));
console.log(Object.entries(obj5)); // ---> to give the key and value pairs inside an array
