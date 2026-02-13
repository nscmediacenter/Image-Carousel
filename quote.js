// Slide image paths
const slides = [
    "assets/1.JPG",
    "assets/half.JPG",
    "assets/3.JPG",
    "assets/4.JPG",
    "assets/5.JPG",
    "assets/6.JPG",
    "assets/7.JPG"
];

const container = document.getElementById("carousel-container");
const track = document.getElementById("carousel-track");
const dotsContainer = document.getElementById("carousel-dots");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
let slideWidth;

// Populate track
slides.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    track.appendChild(img);
});

// Duplicate slides for infinite seamless loop
slides.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    track.appendChild(img);
});

// Create dots
slides.forEach((_, i) => {
    const dot = document.createElement("span");
    if(i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

// Set slide width
function setSlideWidth() {
    slideWidth = container.clientWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
window.addEventListener("resize", setSlideWidth);
setSlideWidth();

// Update active dot
function updateDots() {
    const dots = dotsContainer.querySelectorAll("span");
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex % slides.length].classList.add("active");
}

// Next slide
function nextSlide() {
    currentIndex++;
    track.style.transition = "transform 0.8s ease-in-out";
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateDots();

    if (currentIndex === slides.length) {
        setTimeout(() => {
            track.style.transition = "none";
            currentIndex = 0;
            track.style.transform = `translateX(0px)`;
            updateDots();
        }, 800);
    }
}

// Previous slide
function prevSlide() {
    if (currentIndex === 0) {
        track.style.transition = "none";
        currentIndex = slides.length;
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
    setTimeout(() => {
        currentIndex--;
        track.style.transition = "transform 0.8s ease-in-out";
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        updateDots();
    }, 20);
}

// Buttons
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto-slide
let autoSlide = setInterval(nextSlide, 3000);

// Pause on hover
container.addEventListener("mouseenter", () => clearInterval(autoSlide));
container.addEventListener("mouseleave", () => autoSlide = setInterval(nextSlide, 3000));

// Go to dot slide
function goToSlide(i) {
    currentIndex = i;
    track.style.transition = "transform 0.8s ease-in-out";
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateDots();
}

// Swipe support
let startX = 0;
container.addEventListener("touchstart", e => startX = e.touches[0].clientX);
container.addEventListener("touchend", e => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide();
    else if (endX - startX > 50) prevSlide();
});
