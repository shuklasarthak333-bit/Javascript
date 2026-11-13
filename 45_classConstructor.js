class User{

    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `fgh${this.password}abc`
    }

    captitilizeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const User1 = new User("Sarthak","abc@gmail.com","abc@1234");
// console.log(User1);
console.log(User1.encryptPassword());
console.log(User1.captitilizeUsername());