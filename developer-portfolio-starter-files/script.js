const mainLinks = document.querySelector('.navigation .menu-list');
const navToggle = document.querySelector('.hamburger');

let toggle = true

document.addEventListener("DOMContentLoaded", () => {
    navToggle.addEventListener("click", () => {
        if (toggle === false && window.innerWidth <= 767) {
            mainLinks.style.setProperty("display", "flex")
            toggle = !toggle;
        } else if (toggle === true && window.innerWidth <= 767) {
            mainLinks.style.setProperty("display", "none")
            toggle = !toggle;
        }
    
    });

  });
