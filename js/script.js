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


// Scroll to the top button
let scrollUpBtn = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

scrollUpBtn.addEventListener("click", topFunction);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

