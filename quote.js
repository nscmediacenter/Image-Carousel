const quotes = [
    {
        title: "J. Paul Getty",
        description: "\"My love of fine art increased - the more of it I saw, the more of it I wanted to see.\""
    },
    {
        title: "Jerzy Kosinski",
        description: "\"The principles of true art is not to portray, but to evoke.\""
    },
    {
        title: "Pierre Bonnard",
        description: "\"A painting that is well composed is half finished.\""
    },
    {
        title: "Andrew Wyeth",
        description: "\"One's art goes as far and as deep as one's love goes.\""
    },
    {
        title: "Vincent van Gogh",
        description: "\"I dream my painting, and then I paint my dream.\""
    },
    {
        title: "Pablo Picasso",
        description: "\"Every child is an artist. The problem is how to remain an artist once we grow up.\""
    },
    {
        title: "Henri Matisse",
        description: "\"Creativity takes courage.\""
    },
    {
        title: "Georgia O'Keeffe",
        description: "\"I found I could say things with color and shapes that I couldn't say any other way—things I had no words for.\""
    },
    {
        title: "Leonardo da Vinci",
        description: "\"Simplicity is the ultimate sophistication.\""
    },
    {
        title: "Frida Kahlo",
        description: "\"I paint myself because I am so often alone and because I am the subject I know best.\""
    },
    {
        title: "Salvador Dalí",
        description: "\"Have no fear of perfection - you'll never reach it.\""
    },
    {
        title: "Paul Cezanne",
        description: "\"A work of art which did not begin in emotion is not art.\""
    },
    {
        title: "Edvard Munch",
        description: "\"Nature is not only all that is visible to the eye... it also includes the inner pictures of the soul.\""
    },
    // Photography Quotes
    {
        title: "Ansel Adams",
        description: "\"You don’t take a photograph, you make it.\""
    },
    {
        title: "Henri Cartier-Bresson",
        description: "\"To photograph is to hold one’s breath, when all faculties converge to capture fleeting reality. It’s at that precise moment that mastering an image becomes a great physical and intellectual joy.\""
    },
    {
        title: "Dorothea Lange",
        description: "\"Photography takes an instant out of time, altering life by holding it still.\""
    },
    {
        title: "Robert Capa",
        description: "\"If your pictures aren’t good enough, you’re not close enough.\""
    },
    {
        title: "Imogen Cunningham",
        description: "\"Which of my photographs is my favorite? The one I’m going to take tomorrow.\""
    },
    {
        title: "Ted Grant",
        description: "\"When you photograph people in color, you photograph their clothes. But when you photograph people in black and white, you photograph their souls.\""
    }
];

let index = 0;
let toggleBackground = true; // Flag to toggle background color

function showQuote() {
    const quoteBox = document.getElementById('quote-box');
    const quote = quotes[index];
    
    // Set the quote text
    quoteBox.innerHTML = `<strong>${quote.title}</strong><br>${quote.description}`;
    
    // Toggle background color
    if (toggleBackground) {
        quoteBox.style.backgroundColor = "#e0f7fa"; // Light cyan
    } else {
        quoteBox.style.backgroundColor = "#fff3e0"; // Light orange
    }
    
    // Toggle the flag for next iteration
    toggleBackground = !toggleBackground;
    
    // Show the box with fade-in
    quoteBox.classList.add('show');

    // Update index for the next quote
    index = (index + 1) % quotes.length;

    // Fade out the quote after 8 seconds
    setTimeout(() => {
        quoteBox.classList.remove('show');
    }, 8000); 

    // Show the next quote after 9 seconds
    setTimeout(showQuote, 9000);
}

showQuote();