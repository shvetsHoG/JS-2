const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const mainSlide = document.querySelector(".main-slide");
const container = document.querySelector(".container");

const height = container.clientHeight;
const len = sidebar.querySelectorAll("div").length - 1;
sidebar.style.top = `-${len * 100}vh`;

let slideIndex = 0;

upButton.addEventListener("click", () => {
    slider("up");
});

downButton.addEventListener("click", () => {
    slider("down");
});

function slider(direction) {
    if (direction === "up") {
        ++slideIndex;
        if (slideIndex == len + 1) {
            slideIndex = 0;
        }
    } else if (direction === "down") {
        --slideIndex;
        if (slideIndex < 0) {
            slideIndex = len;
        }
    }
    mainSlide.style.transform = `translateY(-${height * slideIndex}px)`;
    sidebar.style.transform = `translateY(${height * slideIndex}px)`;
}
