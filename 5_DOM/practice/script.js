console.log("project");
const text = document.querySelector("#sampleText");
const boldBtn = document.querySelector("#bold");


boldBtn.addEventListener("click", ()=>{
    text.style.fontWeight = 800;
});

const textItalic = document.querySelector("#italic");
textItalic.addEventListener("click", ()=>{
    text.style.fontStyle = "italic";
});

const textUd = document.querySelector("#underline");
textUd.addEventListener("click", ()=>{
    text.style.textDecoration = "underline";
});

const textFontSmall = document.querySelector("#small");
const textFSBnt = document.querySelector("#sampleText");
textFontSmall.addEventListener("click", ()=>{
    text.style.fontSize = "12px";
});

const textFontMedium = document.querySelector("#medium");
const textFMBnt = document.querySelector("#sampleText");
textFontMedium.addEventListener("click", ()=>{
    text.style.fontSize = "16px";
});

const textFontLarge = document.querySelector("#large");
const textFLBnt = document.querySelector("#sampleText");
textFontLarge.addEventListener("click", ()=>{
    text.style.fontSize = "23px";
});

const textFontXlarge = document.querySelector("#x-large");
const textFXLBnt = document.querySelector("#sampleText");
textFontXlarge.addEventListener("click", ()=>{
    text.style.fontSize = "30px";
});

const monoBnt = document.querySelector("#monospace"); 
const textMono = document.querySelector("#sampleText");
monoBnt.addEventListener("click", ()=>{
    text.style.fontFamily = "monospace";
});

const cursiveBnt = document.querySelector("#cursive"); 
const textCursive = document.querySelector("#sampleText");
cursiveBnt.addEventListener("click", ()=>{
    text.style.fontFamily = "cursive";
});

const fantasyBnt = document.querySelector("#fantasy"); 
const textFantasy = document.querySelector("#sampleText");
fantasyBnt.addEventListener("click", ()=>{
    text.style.fontFamily = "fantasy";
});

const textLeft = document.querySelector("#left");
const textLeftAlign = document.querySelector("#sampleText");
textLeft.addEventListener("click", ()=>{
    text.style.textAlign = "left";
});

const textCenter = document.querySelector("#center");
const textCenterAlign = document.querySelector("#sampleText");
textCenter.addEventListener("click", ()=>{
    text.style.textAlign = "center";
});


const textRight = document.querySelector("#right");
const textRightAlign = document.querySelector("#sampleText");
textRight.addEventListener("click", ()=>{
    text.style.textAlign = "right";
});

const textColorInput = document.querySelector("#textColor");
const contentText = document.querySelector("#sampleText");

textColorInput.addEventListener("input", () => {
    contentText.style.color = textColorInput.value;
});   

const bgColorInput = document.querySelector("#bgColor");
const bgTextBnt = document.querySelector("#sampleText");
bgColorInput.addEventListener("input", () => {
    bgTextBnt.style.backgroundColor = bgColorInput.value;
});

const bgColor = document.querySelector("#text-color");
const bgText = document.querySelector("#bgColor_style");
bgColor.addEventListener("input", () => {
    bgText.style.backgroundColor = bgColor.value;
});