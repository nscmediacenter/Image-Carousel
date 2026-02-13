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
let toggleBackground = true;

function showSlide() {
    const slideBox = document.getElementById("quote-box");
    const slide = slides[index];

    // Clear previous content
    slideBox.innerHTML = "";

    // IMAGE SLIDE
    if (slide.image) {
        slideBox.innerHTML = `
            <img src="${slide.image}" alt="Slide image" class="slide-image">
        `;
    }
    // QUOTE SLIDE
    else {
        slideBox.innerHTML = `
            <strong>${slide.title}</strong><br>
            ${slide.description}
        `;
    }

    // Toggle background color
    slideBox.style.backgroundColor = toggleBackground
        ? "#e4d2fc"
        : "#ffe0fb";

    toggleBackground = !toggleBackground;

    // Fade in
    slideBox.classList.add("show");

    // Prepare next index
    index = (index + 1) % slides.length;

    // Fade out
    setTimeout(() => {
        slideBox.classList.remove("show");
    }, 8000);

    // Next slide
    setTimeout(showSlide, 9000);
}

showSlide();
