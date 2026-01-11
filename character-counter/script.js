document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.querySelector("textarea");
    const characterCounter = document.querySelector(".character-counter");
    textarea.addEventListener("input", () => {
        textarea.style.height = "auto"; 
        const newHeight = textarea.scrollHeight;
        textarea.style.height = `${newHeight}px`;
        characterCounter.textContent = "Count: " + textarea.value.length;
    });

});