const slides = [
    {
        image: "assets/1.JPG",
    },
    {
        image: "assets/half.JPG",
    },
    {
       image: "assets/3.JPG",
    },
    {
        image: "assets/4.JPG",
    },
    {
          image: "assets/5.JPG",
    },
     {
          image: "assets/6.JPG",
    },
     {
          image: "assets/7.JPG",
    },
];

let index = 0;

function showSlide() {
    const slideBox = document.getElementById("quote-box");

    const img = document.createElement("img");
    img.src = slides[index].image;
    img.className = "slide-image";

    slideBox.innerHTML = "";
    slideBox.appendChild(img);

    // Force reflow so animation triggers
    img.offsetHeight;

    // Slide in
    img.classList.add("show");

    // After 4 seconds → slide out
    setTimeout(() => {
        img.classList.remove("show");
        img.classList.add("hide");
    }, 4000);

    // Move to next image
    index = (index + 1) % slides.length;

    // Show next slide
    setTimeout(showSlide, 4800);
}

showSlide();