let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;

document.getElementById('carousel__button--next').addEventListener("click", function() {
    moveToNextSlide();
});
document.getElementById('carousel__button--prev').addEventListener("click", function() {
    moveToPrevSlide();
});

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }

    slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    updateSlidePosition();
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    updateSlidePosition();
}

// GRIP’s Timeline and Important Dates
const d = new Date();
const date = d.getDate();
if (date < '25') {
    const plusOneMonth = d.getMonth();
    const plusTwoMonth = d.getMonth()+1;
    const plusThreeMonth = d.getMonth()+2;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("apply_date").innerHTML = "24th of " + months[plusOneMonth] +  " (11:59 PM SGT)";
    document.getElementById("select_email").innerHTML = "Last week of " + months[plusOneMonth];
    document.getElementById("start_date").innerHTML = "1st week of " + months[plusTwoMonth];
    document.getElementById("assignment_date").innerHTML = "by 21st of " + months[plusTwoMonth] +  " (11:59 PM SGT)";
    document.getElementById("feedback_date").innerHTML = "by 25th of the " + months[plusTwoMonth] +  " (11:59 PM SGT)";
    document.getElementById("certificate_date").innerHTML = "1st week of " + months[plusThreeMonth];
} else {
    const plusOneMonth = d.getMonth()+1;
    const plusTwoMonth = d.getMonth()+2;
    const plusThreeMonth = d.getMonth()+3;
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("apply_date").innerHTML = "24th of " + months[plusOneMonth] +  " (11:59 PM SGT)";
    document.getElementById("select_email").innerHTML = "Last week of " + months[plusOneMonth];
    document.getElementById("start_date").innerHTML = "1st week of " + months[plusTwoMonth];
    document.getElementById("assignment_date").innerHTML = "by 21st of " + months[plusTwoMonth];
    document.getElementById("feedback_date").innerHTML = "by 25th of the " + months[plusTwoMonth];
    document.getElementById("certificate_date").innerHTML = "1st week of " + months[plusThreeMonth];
}