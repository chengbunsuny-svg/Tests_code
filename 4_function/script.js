// function getday(num){
//     return num;
// }
// const day = getday(2);
// console.log(day);
// // console.log(getday(6));
// const rand_num = Math.random();
// console.log(rand_num);
const body = document.querySelector("body");
function randomBg(){
    const r = Math.random() * 255 + 1;
    const g = Math.random() * 255 + 1;
    const b = Math.random() * 255 + 1;
    body.style.background = `rgb(${r}, ${g},${b} )`;
}
randomBg();