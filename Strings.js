const name = "sarthak"
const age = 20
// old and worse method

// console.log(name + age)

 //new method and better

 console.log(`Hello my name is ${name} and my current age is ${age}`);

 // another way to declare string

 const game = new String('SARTHAK SHUKLA')
 console.log(game);

console.log(game[4]) // to access particular char from the string at the 4th index

console.log(game.charAt(2)) ;
console.log(game. indexOf('t'));
const anotherString = game.slice(-8, 4)
console. log(anotherString);

const newString = game. substring(0, 4)
console. log(newString);

const example = new String('       SARTHAK        ')
console.log(example);
console.log(example.trim());

const url = "www.googl%20e.com";
console.log(url);
const newurl = url.replace('%20','');
console.log(newurl);

const sp = new String('sarthak-shukla-20');
console.log(sp.split('-'))
