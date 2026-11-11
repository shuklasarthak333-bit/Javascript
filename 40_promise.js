// Syntax of PROMISE
// const promiseOne = new Promise(function(resolve,reject){
//     // Do async task
//     //DataBase calls, cryptography, network calls
// });

const promiseOne = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Async task is complete');
        resolve(); // resolve needs to be called
    },1000)
})
// then is in direct connection to resolve
promiseOne.then(function(){
    console.log('Promise consumed');
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();     
    },1000)
}).then(()=>{
    console.log("async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({username:"sarthak",
            email:"shuklasarthak333@gmail.com"
        })
    },1000)
})
promiseThree.then(function(user){
    console.log(user.email);
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"sarthak",password:"impala"})
        }
        else{
            reject("Error:Something went wrong")
        }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("work done");
})

const promiseFive = new Promise(function(resolve,reject){
    let error = false;
    setTimeout(function(){
    if(!error){
        resolve({username:"impala", password:"impala67"})
    }
    else{
        reject('ERROR! JS WENT WRONG!!!!!!!')
    }},1000)
});
async function consumePromiseFive(){
    try{
        const response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive();


fetch('https://api.github.com/users/shuklasarthak333-bit')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})