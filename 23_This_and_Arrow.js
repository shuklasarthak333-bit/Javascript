const Obj = {
    username: "sarthak",
    Money: 999,
    Section : 24,


   abc: function(){
    console.log(this.username);
    console.log(`${this.username},welcome your current balance is ${this.Money}`);
}
};

Obj.abc();
Obj.username = "shukla";
Obj.abc();

//Arrow function

const arrFunc = (num1,num2) => {
    return num1 + num2;
}
console.log(arrFunc(3,4));

// Implicit return way to do the same

// if we use curly braces then, it is necessary to write return keyword otherwise the next line/ same line after the "=>" is considered to be returned.

const arrFunc1 = (num1,num2) => num1+num2;

console.log(arrFunc(5,6));

// to return an object using arrow function it is necessary to paranthesis

const arrFunc2 = () => ({username: "hello",
    age: 20
});
console.log(arrFunc2());
