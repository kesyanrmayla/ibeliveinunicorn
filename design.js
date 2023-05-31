var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

function showSlide(n) {
    if (n < 0) {
        slideIndex = slides.length - 1;
    } else if (n >= slides.length) {
        slideIndex = 0;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

showSlide(slideIndex);