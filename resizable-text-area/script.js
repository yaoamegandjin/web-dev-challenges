document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.querySelector("textarea");

    textarea.addEventListener("input", () => {
        textarea.style.height = "auto"; 
        const newHeight = textarea.scrollHeight;
        textarea.style.height = `${newHeight}px`;
    });

});