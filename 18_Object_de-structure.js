const abc = {
    Name : "Sarthak",
    Age : 18,
    Section : 24
};

// To call directly instead of writing course.Age everytime in print statement

const{Age} = abc
console.log(Age);

//or

const{Name: N} = abc
console.log(N);

