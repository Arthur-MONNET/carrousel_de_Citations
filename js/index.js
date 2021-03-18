const carousel=Array.from(document.querySelector("#carousel").children)
const carouselLeng=carousel.length;
let contentDiv= document.querySelector("#points");

for (let i = 0; i < carouselLeng; i++) {
    const newDiv = document.createElement("button")
    const newContent = document.createElement("i")
    newContent.classList.add("fa-radiation");
    newContent.classList.add("fas");
    newContent.classList.add("otherPoint");
    newDiv.classList.add("point");
    contentDiv.append(newDiv.appendChild(newContent));

}

const points=Array.from(document.querySelector("#points").children)
function generatePoints(indexActiv, newIndex){
    points[indexActiv].classList.add("otherPoint","fa-radiation");
    points[indexActiv].classList.remove("fa-radiation-alt","pointSelect");
    points[newIndex].classList.remove("otherPoint","fa-radiation");
    points[newIndex].classList.add("fa-radiation-alt","pointSelect");

}
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const modulo = (x, y) => {
    const m = ((x % y) + y) % y;
    return m < 0 ? m + Math.abs(y) : m;
}


let indexActiv=0;

const buttonPoints=Array.from(document.querySelector("#points").children)
generatePoints(0, 0);


function swipe(direction) {
    console.log("mdr")
    const newIndex = modulo(indexActiv + direction, carouselLeng);
    carousel[newIndex].classList.add("opacity");
    carousel[indexActiv].classList.remove("opacity");
    generatePoints(indexActiv, newIndex);
    indexActiv=newIndex;
}

window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        swipe(1)
    }
    if (event.key === 'ArrowLeft'){
        swipe(-1)
    }

})
right.addEventListener("click",() =>swipe(1))
left.addEventListener("click",() => swipe(-1))
for (let i = 0; i < carouselLeng; i++) {
buttonPoints[i].addEventListener("click", () => {
    const newIndex = modulo(i, carouselLeng);
    carousel[indexActiv].classList.remove("opacity");
    carousel[newIndex].classList.add("opacity");

    generatePoints(indexActiv, newIndex);
    indexActiv=newIndex;
})}

const circle=document.querySelector("#night");
window.addEventListener("mousemove", e => {
    circle.style.top = `${e.clientY-450}px`;
    circle.style.left = `${e.clientX-450}px`;
})
const body=document.querySelector("body")
const borderCircle = document.querySelector("#borderCircle")
const lampe = document.querySelector(".lampe")
const light = document.querySelector("#light");
const lightbulb = document.querySelector(".fa-lightbulb")
light.addEventListener("click",() =>{
    borderCircle.classList.toggle("showBorder");
    circle.classList.toggle("circle");
    lampe.classList.toggle("fa-sun");
    lampe.classList.toggle("fa-moon");
    lightbulb.classList.toggle("lightbulb")
    body.classList.toggle("cursorNone")
})