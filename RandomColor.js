const h3=document.querySelector("h3");
const btn=document.querySelector("button");
const box=document.querySelector(".box");
const span=document.querySelector("span");
const body=document.querySelector("body");



btn.addEventListener("click",randomColor)

function randomColor(){



    const red=Math.floor(Math.random()*255)
    const green=Math.floor(Math.random()*255)
    const blue=Math.floor(Math.random()*255)


    const redtext=Math.floor(Math.random()*255)
    const greentext=Math.floor(Math.random()*255)
    const bluetext=Math.floor(Math.random()*255)

    const color=`rgb(${red},${green},${blue})`
    const colortext=`rgb(${redtext},${greentext},${bluetext})`


    h3.innerText=color;
    box.style.backgroundColor=color;
    body.style.backgroundColor=colortext;
    span.style.color=colortext;
    h3.style.color=color;


}