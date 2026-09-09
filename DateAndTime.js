//Dates
// Months start from 0 in javascript
// by default dates are calculated from 1st of januart 1970 in js (in miliseconds)
let myDate = new Date();
console.log(myDate);
//convert to string 
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

console.log(typeof myDate);  // date is object in JS
// let Newd = new Date(2026,0,31, 23,45,59); //original
// let Newd = new Date(2026,12,31, 23,45,61); // converts extras like 61 to 46:01 and 12 to january as month start from 0 in js.
let Newd = new Date("2026-11-24");
console.log(Newd.toLocaleString());

// to get the date now in ms

let CurrDate = Date.now();
console.log(CurrDate);
console.log(Newd.getTime()) // fetches the time in entered date or the date stored in the variable (Newd in this case).
// to convert to seconds
console.log(Date.now()/1000);
// to convert to seconds (taking floor value)
console.log(Math.floor(Date.now()/1000));
console.log(Newd.getMonth());
