function scrollAppear() {
    const textintro = document.querySelector('.intro-text');
    const introPosition = textintro.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (introPosition < screenPosition) {
        textintro.classList.add('intro-apper');
    }

} // end of function

window.addEventListener('scroll', scrollAppear);
// ////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////
window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#5dd27f",
        "#2d84de",
        "#f8b96a",
        "#fa783d",
        "#7074c7",
        "#f72061"
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        });
    }); //end of for

    const createBubble = index => {
        // Create bubbles
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function () {
            visual.removeChild(this);
        });
    };
});
