// Immediately Invoked Function Expression (IIFE)

(function abc(){
    console.log(` HELLO USER `);
})(); // here if we don't write semicolon then, the code will give an error and the second IIFE will not be executed.

// here the first bracket is for function definition and the second one is for function call.
// IIFE is used to execute a function at the same time to prevent it from global scope pollutions.

(() => console.log(`Hello User 2`))();  // IIFE in an arrow function

// we can also pass values in the IIFE bracket -> last bracket

((name,age)=> console.log(`Hello my name is ${name} and my age is ${age}`))("chilgoza", 20);


//named IIFE -> functions with names
// unnamed IIFE -> arrow functions