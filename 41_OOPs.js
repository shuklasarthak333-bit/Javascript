const user = {
    username : "sarthak",
    age : 21,
    
    getUserDetails : function(){

        console.log(`the username of the user is: ${this.username}`);
        // console.log(`the username of the user is: ${username}`); -> no context is given so it will return an error
    }
}

console.log(user);
console.log(user.getUserDetails());
console.log(typeof(getUserDetails));

// CONSTRUCTOR FUNCTION 

function User(Username,isLoggedIn){
    this.Username = Username;
    this.isLoggedIn = isLoggedIn; 
}

 // using new keyword is necessary otherwise the 2nd values will replace the original value if we use new keyword it creates a new instance/copy of the original and works on that instead
 
const UserOne = new User("SARTHAK",true);
const UserTwo = new User("SHIVANSH",false);

console.log(UserOne);
console.log(UserTwo);
