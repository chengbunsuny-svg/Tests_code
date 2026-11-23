console.log("Selector");

// console.log(document);

const title = document.querySelector("h1");
// console.log(title);
title.textContent = "Siem Reap, Cambodia";

const box = document.querySelector(".box");
box.innerHTML = "<h3>Here is the Box</h3>";

const myContainer = document.querySelector("#container");
console.log(myContainer);

// console.log(mycontainer);

const listItem = document.querySelectorAll("li");
listItem[0].textContent = "Kompot";
listItem[1].textContent = "Kep";
listItem[2].textContent = "Svayrieng";

for (let element of listItem) {
    element.style.backgroundColor = "Red";
}
