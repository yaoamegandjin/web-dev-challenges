const mainLinks = document.querySelector('.main-links');
const navToggle = document.querySelector('.mobile-nav-toggle');


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");
    navToggle.addEventListener("click", () => {
        const visibility = mainLinks.getAttribute("data-visible");
        console.log(visibility)
        if (visibility === "false") {
            mainLinks.setAttribute('data-visible', true);
        }
        else {
            mainLinks.setAttribute('data-visible', false)
        }
    
    });

  });