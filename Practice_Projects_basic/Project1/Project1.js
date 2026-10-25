const buttons = document.querySelectorAll(".Dabba");
const body = document.querySelector("body");

buttons.forEach((button) =>{
    console.log(button);
    button.addEventListener("click",(e) =>{
        console.log(e.target);
        if(e.target.id ==="Red"){
            body.style.backgroundColor = e.target.id;
            //or
            // body.style.backgroundColor = "red";
        }
        if(e.target.id ==="Green"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==="Blue"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==="Brown"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==="Back"){
            body.style.backgroundColor = "white";
        }
    })
});
