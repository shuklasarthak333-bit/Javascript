class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return this._password.toLowerCase();
    }

    set password(value){
        this._password = value;
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value;
    }
}

const Sarthak = new User("abc@gmail.com", "ABC1234");

console.log(Sarthak.email);
console.log(Sarthak.password);
