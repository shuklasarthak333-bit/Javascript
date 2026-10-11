// for of loop

const arr = [1,2,3,4,5];
for(const i of arr){
    console.log(i);
}

// OR

const words = "IMPALA 67";
let j=0;
for(const i of words){
    if(i==" "){
        continue;
    }
    console.log(`the ${j}th letter is ${i}`);
    j=j+1;
}

// map

const map = new Map();
map.set(1,'Hello');
map.set(2,'world');
map.set(1,'Hello'); // will not be printed as map stores unique values only and in the same order

console.log(map);

for(const i of map){
    console.log(i);
}
//OR
for(const [key,value] of map){
    console.log(key,':',value);
}

// for in loop for objects

const obj1 = {
    js : 'JavaScript',
    'cpp' : "C++",
    'html' : "Hyper text Markup Language"
};

for (const key in obj1) {
    console.log(key); // returns only the keys
    console.log(`${key} is the shortcut for ${obj1[key]}`);
}

// forEach
const abc = [1,2,3,4,5,6];

abc.forEach(function (num){
    console.log(num*num);
})

const arrObj = [
    {
        CodeWord:"JS",
        FullName:"JavaScript"
    },
    {
        CodeWord:"cpp",
        FullName:"C++"   
    },
    {
        CodeWord:"CSS",
        FullName:"Cascading Sheet"
    }
]

arrObj.forEach((item)=>{
    console.log(item.CodeWord);
    console.log(item.FullName);
})