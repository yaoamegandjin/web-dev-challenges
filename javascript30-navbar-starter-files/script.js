const productsLink = document.querySelector(".products-link");
const hiddenContent = document.querySelector(".hidden-content");
const closeMenuIcon = document.querySelector(".hidden-content-title img")
const navToggle = document.querySelector(".mobile-nav-toggle");
document.addEventListener("DOMContentLoaded", () => {
    productsLink.addEventListener("click", () => {
        hiddenContent.classList.toggle("hidden-content-on");
      });
    closeMenuIcon.addEventListener("click", () => {
        hiddenContent.classList.toggle("hidden-content-on");
    })
    navToggle.addEventListener("click", () => {
      hiddenContent.classList.toggle("hidden-content-on");
    })

    window.addEventListener("resize", function() {
      if (window.innerWidth < 721) {
        hiddenContent.classList.remove("speech-bubble");
      }
      if (window.innerWidth > 721) {
        hiddenContent.classList.add("speech-bubble");
      }
    });
  });