class User{
    constructor(username){
        this.username = username;
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }
    addCourse(){
        console.log(`new user has been added by ${this.username}`);   
    }

    static noAccess(){
        console.log(`restricted Info.`);   
    }
}

const User1 = new Teacher("Sarthak","abc@gmail.com",1234);

console.log(User1.addCourse());
console.log(User1);


console.log(User1 instanceof User);
console.log(User1 instanceof Teacher);
console.log(User1.noAccess());
//static keyword -> used before function to restrict a function use beyond it's scope not even the childs of the class, like noAccess function in the Teacher class
