// rest operator in functions
// NOTE: rest operator resembles spread operator i.e., "..." the only difference is use case or where is it being used.

function Rest1(num1){
    return num1;
}

function Rest2(...num1){
    return num1;
}

function Rest3(val1,val2 , ...num1){
    return num1;
}

console.log(Rest1(100,200,300)); // returns only 100
console.log(Rest2(100,200,300)); // returns the whole parameters as an array
console.log(Rest3(100,200,300,400,500)); // returns the values as an array after assigning values to val1 and val2 i.e., 100 & 200 will not be included in the output.

// Object as parameter in a function

const info = {
    username : "sarthak",
    age : "20",
    class : 24
};

function Obj(abc){
    console.log(`the username is ${abc.username} of age ${abc.age} and Section ${abc.class}`);
}

Obj(info);

// Array as parameter in a function

const Arr=[10,20,30,40,50,60];

function fetchArrVal(anyArray){
    return anyArray[2];
}

console.log(fetchArrVal(Arr));