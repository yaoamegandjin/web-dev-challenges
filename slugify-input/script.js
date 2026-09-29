document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input");
    const slugText = document.querySelector(".slug-text");

    function slugify(text) {
        return text
            .normalize("NFD")                
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/['’]/g, "")            
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }
    input.addEventListener("input", () => {
        let text = input.value;
        if (text.length === 0) {
            slugText.innerHTML = "";
        } else {
            const sluggedText = "/" + slugify(text);
            slugText.innerHTML = sluggedText;
        }
    });
});