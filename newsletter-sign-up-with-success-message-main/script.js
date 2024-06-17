const form = document.querySelector("form");
const signUpForm = document.querySelector(".newsletter-sign-up");
const successForm = document.querySelector(".success-box");
const successMsgButton = document.querySelector(".success-box button");

function isValidEmail(emailAddr) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailAddr.match(re);
}
function validateInputs() {
        const emailError = document.querySelector(".error-message");
        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();
    if (email === "") {
        emailError.textContent = "Valid email required";
        emailInput.style.borderColor = "red";
        emailInput.classList.add("placeholder-error-color");
        emailInput.classList.remove("placeholder-normal-color");
        emailInput.parentNode.classList.add("error");
        emailInput.parentNode.classList.remove("success");
    }
    else if (!(isValidEmail(email))) {
        emailError.textContent = "Valid email required";
        emailInput.classList.add("input-text-color");
        emailInput.style.borderColor = "red";
        emailInput.classList.remove("placeholder-error-color");
        emailInput.parentNode.classList.add("error");
        emailInput.parentNode.classList.remove("success");
            
    }
    else {
        emailError.textContent = "";
        emailInput.classList.add("placeholder-normal-color")
        emailInput.classList.remove("placeholder-error-color");
        emailInput.classList.remove("input-text-color");
        emailInput.style.borderColor = "gray";
        emailInput.parentNode.classList.add("success");
        emailInput.parentNode.classList.remove("error");
    }
        
    if (emailError.textContent === "") {
        toggleCards();
    }
}

function toggleCards() {
    signUpForm.classList.toggle("display-none");
    successForm.classList.toggle("display-none");
}
        
form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

successMsgButton.addEventListener("click", () => {
    toggleCards();
})
