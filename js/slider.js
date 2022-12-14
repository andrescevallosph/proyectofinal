const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let slicerSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left")
const btnRight = document.querySelector("#btn-right")

slider.insertAdjacentElement("afterbegin", slicerSectionLast)

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.margiLeft = "-200%";
    slider.style.transition ="all 0.5s"
    setTimeout(function() {
        slider.style.transition ="none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.margiLeft ="-100%";
    }, 500);
}   

function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let slicerSectionLast = sliderSection[sliderSection.length -1];
        slider.style.margiLeft = "0%";
    slider.style.transition ="all 0.5s"
    setTimeout(function() {
        slider.style.transition ="none";
        slider.insertAdjacentElement("afterbegin", slicerSectionLast);
        slider.style.margiLeft ="-100%";
    }, 500);
}  

btnRight.addEventListener("click", function(){
    Next();
});


btnLeft.addEventListener("click", function(){
    Prev();
});

setInterval(function(){
    Next();
}, 6000);