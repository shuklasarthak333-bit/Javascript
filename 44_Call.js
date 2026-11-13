function setUsername(username){
    this.username = username;
    console.log("called");
}

function createUsername(username,email,password){
    setUsername.call(this, username);
    this.email = email;
    this.password = password;
}

const User1 = new createUsername("sarthak","abc@gmail.com","abcdef");
console.log(User1);
