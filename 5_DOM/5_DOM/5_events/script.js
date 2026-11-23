
function logHello(){
    console.log("Hello");

}

const ntnme = document.querySelector("#myButton");
ntnme.addEventListener("click", logHello);

const usernameInput = document.querySelector("#username");


function sayHi(){
    console.log(usernameInput.value);
}

// usernameInput.addEventListener("input", sayHi);
//click, input, change
usernameInput.addEventListener("change",()=>{
    console.log(usernameInput.value)
})

const textColorInput = document.querySelector("#text-color");
const contentText = document.querySelector("#result");
textColorInput.addEventListener("input",()=>{
    contentText.style.color = textColorInput.value;
})
