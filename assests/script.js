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


function changeOne() {
    $(".inspiring-section__custom-card-def").css(
        {
            "background-image": "none", 
            "background-color": "#eeee", 
            "color" : "black"
        }
    );
    $(".inspiring-section__custom-card-2").css(
        {
            "background-color": "none", 
            "background-image": "linear-gradient( to right, #d9bd00 0%, #f11800 150%, #d9bd00 100% )", 
            "color" : "#ffff"
        }
    );
}
function changeTwo() {
    $(".inspiring-section__custom-card-2").css(
        {
            "background-image": "none", 
            "background-color": "#eeee", 
            "color" : "black"
        }
    );
    $(".inspiring-section__custom-card-3").css(
        {
            "background-color": "none", 
            "background-image": "linear-gradient( to right, #d9bd00 0%, #f11800 150%, #d9bd00 100% )", 
            "color" : "#ffff"
        }
    );
}
function changeThree() {
    $(".inspiring-section__custom-card-def").css(
        {
            "background-color": "none", 
            "background-image": "linear-gradient( to right, #d9bd00 0%, #f11800 150%, #d9bd00 100% )", 
            "color" : "#ffff"
        }
    );
    $(".inspiring-section__custom-card-3").css(
        {
            "background-image": "none", 
            "background-color": "#eeee", 
            "color" : "black"
        }
    );
}

for (var i = 0; i < 100; i++) {
    setTimeout(changeOne, 5000);
    setTimeout(changeTwo, 10000);
    setTimeout(changeThree, 15000);

    setTimeout(changeOne, 20000);
    setTimeout(changeTwo, 25000);
    setTimeout(changeThree, 30000);

    setTimeout(changeOne, 35000);
    setTimeout(changeTwo, 40000);
    setTimeout(changeThree, 45000);

    setTimeout(changeOne, 50000);
    setTimeout(changeTwo, 55000);
    setTimeout(changeThree, 60000);

    setTimeout(changeOne, 65000);
    setTimeout(changeTwo, 70000);
    setTimeout(changeThree, 75000);

    setTimeout(changeOne, 80000);
    setTimeout(changeTwo, 85000);
    setTimeout(changeThree, 90000);

    setTimeout(changeOne, 95000);
    setTimeout(changeTwo, 100000);
    setTimeout(changeThree, 150000);

    setTimeout(changeOne, 200000);
    setTimeout(changeTwo, 250000);
    setTimeout(changeThree, 300000);
}