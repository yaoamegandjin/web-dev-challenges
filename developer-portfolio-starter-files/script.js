const mainLinks = document.querySelector('.navigation .menu-list');
const navToggle = document.querySelector('.hamburger');

let toggle = false
document.addEventListener("DOMContentLoaded", () => {
    navToggle.addEventListener("click", () => {
        
        if (toggle === false && window.innerWidth <= 767) {
            mainLinks.classList.remove("display-none");
            mainLinks.classList.add("display-block");
            toggle = !toggle;
        } else if (toggle === true && window.innerWidth <= 767) {
            mainLinks.classList.add("display-none");
            mainLinks.classList.remove("display-flex");
            toggle = !toggle;
        }
    
    });

  });
