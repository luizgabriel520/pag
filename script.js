function playMusic() {
    var music = document.getElementById("music");
    music.play();
}

document.addEventListener("DOMContentLoaded", () => {
    createHearts();
});

function createHearts() {
    const heartsContainer = document.querySelector(".hearts-container");

    for (let i = 0; i < 100; i++) {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`;
        heartsContainer.appendChild(heart);
    }

    setTimeout(() => {
        heartsContainer.innerHTML = "";
    }, 5000); // Remove the hearts after 5 seconds
}
