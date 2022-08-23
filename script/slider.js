setTimeout (moveNext, 3000);
setTimeout (moveHeaderNext, 3000);

function moveNext() {
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
}

function movePre() {
    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
}

function moveHeaderNext() {
    const slidesContainer_2 = document.getElementById("slides-container-2");
    const slide = document.querySelector(".slide");
    const slideWidth = slide.clientWidth;
    slidesContainer_2.scrollLeft += slideWidth;
}

function moveHeaderPre() {
    const slidesContainer_2 = document.getElementById("slides-container-2");
    const slide = document.querySelector(".slide");
    const slideWidth = slide.clientWidth;
    slidesContainer_2.scrollLeft -= slideWidth;
}

