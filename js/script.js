const slideContainerWrapper = document.querySelector(".slide_container-wrapper");
const slideContainer = document.querySelector(".slides-container");
const leftButton = document.getElementById("slide-arrow-prev")
const rightButton = document.getElementById("slide-arrow-next")

const left = () => {
    const slideWidth = slideContainer.clientWidth;
    slideContainer.scrollLeft -= slideWidth;
};

const right = () => {
    const slideWidth = slideContainer.clientWidth;
    slideContainer.scrollLeft += slideWidth;
};

leftButton.addEventListener("click", left);
rightButton.addEventListener("click", right);