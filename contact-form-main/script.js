const form = document.getElementById("form");
const supportDiv = document.getElementById("support");
const generalDiv = document.getElementById("general");
const generalButton = document.getElementById("general-enquiry");
const supportButton = document.getElementById("support-request");


supportButton.addEventListener("click" , () => {
    supportDiv.style.backgroundColor = "#dff1e7";
    supportDiv.style.border = "0.1em solid #0c7d69";
    generalDiv.style.backgroundColor = "white";
    generalDiv.style.border = "1px solid #87a3a6";
})

generalButton.addEventListener("click" , () => {
    generalDiv.style.backgroundColor = "#dff1e7";
    generalDiv.style.border = "0.1em solid #0c7d69";
    supportDiv.style.backgroundColor = "white";
    supportDiv.style.border = "1px solid #87a3a6";
})
form.addEventListener("submit", (event) => {
        event.preventDefault();
        form.style.height = "670px";
        validateInputs();

});

const isValidEmail = emailAddr => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return re.test(String(emailAddr))
    }

const validateInputs = () => {
        const firstnameError = document.querySelector("#first-name + .error-message");
        const firstnameInput = document.getElementById("first-name");
        const firstname = firstnameInput.value.trim();
        if (firstname === "") {
            firstnameError.textContent = "This field is required";
            firstnameInput.style.borderColor = "#d94545";
            firstnameInput.parentNode.classList.add("error");
            firstnameInput.parentNode.classList.remove("success");
        } else {
            firstnameError.textContent = "";
            firstnameInput.style.borderColor = "#87a3a6";
            firstnameInput.parentNode.classList.add("success");
            firstnameInput.parentNode.classList.remove("error");
        }


        const lastnameError = document.querySelector("#last-name + .error-message");
        const lastnameInput = document.getElementById("last-name");
        const lastname = lastnameInput.value.trim();
        if (lastname === "") {
            lastnameError.textContent = "This field is required";
            lastnameInput.style.borderColor = "#d94545";
            lastnameInput.parentNode.classList.add("error");
            lastnameInput.parentNode.classList.remove("success");
        } else {
            lastnameError.textContent = "";
            lastnameError.style.borderColor = "#87a3a6";
            lastnameInput.parentNode.classList.add("success");
            lastnameInput.parentNode.classList.remove("error");
        }

        const emailError = document.querySelector("#email + .error-message");
        const emailInput = document.getElementById("email");
        const email = emailInput.value.trim();
        if (email === "") {
            emailError.textContent = "This field is required";
            emailInput.style.borderColor = "#d94545";
            emailInput.parentNode.classList.add("error");
            emailInput.parentNode.classList.remove("success");
        }
        else if (!isValidEmail(email)) {
            emailError.textContent = "Please enter a valid email address";
            emailInput.style.borderColor = "#d94545";
            emailInput.parentNode.classList.add("error");
            emailInput.parentNode.classList.remove("success");
        } else {
            emailError.textContent = "";
            emailError.style.borderColor = "#87a3a6";
            emailInput.parentNode.classList.add("success");
            emailInput.parentNode.classList.remove("error");
        }


        const queryError = document.querySelector(".query-type-form-field .error-message");

        const generalEnquiryBox = document.getElementById("general-enquiry");
        const generalEnquiry = generalEnquiryBox.checked;
        const supportRequestBox = document.getElementById("support-request");
        const supportRequest = supportRequestBox.checked;
        if (!generalEnquiry && !supportRequest) {
            queryError.textContent = "This field is required";
            queryError.parentNode.classList.add("error");
            queryError.parentNode.classList.remove("success");
        }
        else {
            queryError.textContent = "";
            queryError.parentNode.classList.add("success");
            queryError.parentNode.classList.remove("error");
        }


        const messageError = document.querySelector("#message + .error-message");
        const messageInput = document.getElementById("message");
        const message = messageInput.value.trim();
        if (message === "") {
            messageError.textContent = "This field is required";
            messageInput.style.borderColor = "#d94545";
            messageInput.parentNode.classList.add("error");
            messageInput.parentNode.classList.remove("success");
        } else {
            messageError.textContent = "";
            messageInput.style.borderColor = "#87a3a6";
            messageInput.parentNode.classList.add("success");
            messageInput.parentNode.classList.remove("error");
        }

        const consentError = document.querySelector(".checkbox-form-field .error-message");
        const consentBox = document.getElementById("consent-box");
        const consent = consentBox.checked;
        if (!consent) {
            consentError.textContent = "To submit this form, please consent to being contacted";
            consentBox.parentNode.classList.add("error");
            consentBox.parentNode.classList.remove("success");
        } else {
            consentError.textContent = "";
            consentBox.parentNode.classList.add("success");
            consentBox.parentNode.classList.remove("error");
        }


        if (firstnameError.textContent  === "" && lastnameError.textContent === "" && emailError.textContent === "" && consentError.textContent === "" && messageError.textContent === "" && queryError.textContent === "") {
            form.submit();
            document.getElementById("success-message").style.display = "block"; 
            setTimeout(function(){
                document.getElementById("success-message").style.display = "none"; 
            },  100000);
        }
    }


