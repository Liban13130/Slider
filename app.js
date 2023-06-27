const slides = [...document.querySelectorAll(".slide")];

const sliderData = {
    direction: 0,
    slideOutIndex : 0,
    slideInIndex : 0
}

const directionButtons = [...document.querySelectorAll(".btn-direction")];

directionButtons.forEach(btn => btn.addEventListener("click", handleClick));

function handleClick(e){
    getDirection(e.target)

    slideOut();
}

function getDirection(btn){
    sliderData.direction = btn.className.includes("right") ? 1 : -1; // Est ce que l'élément btn contient la class "right" ? Si oui alors ajoute 1 sinon -1

    sliderData.slideOutIndex = slides.findIndex(slide => slide.classList.contains("active"));

    if(sliderData.slideOutIndex + sliderData.direction > slides.length){
        sliderData.slideInIndex = 0;
    } else if(sliderData.slideOutIndex + sliderData.direction < 0){
        sliderData.slideInIndex = slides.length -1;
    } else{
        sliderData.slideInIndex = sliderData.slideOutIndex + sliderData.direction;
    }
}

// function slideOut(){
//     slideAnimation({
//         el: slides[]
//     })
// }