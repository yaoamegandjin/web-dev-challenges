# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
![alt text](image.png)


### Links

- Solution URL: [https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv/hub]
- Live Site URL: [https://newsletter-sign-up-ya.netlify.app]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned

How to display different image based on viewport

```html
<picture>
  <source media="(max-width: 846px)" srcset="assets/images/illustration-sign-up-mobile.svg" />
  <img src="assets/images/illustration-sign-up-desktop.svg" alt="Illustration Image"/>
</picture>
```

### Useful resources

- [How to use Resolution Switching for Viewport based Image Loading with <srcset>](https://blog.prototypr.io/resolution-switching-to-viewport-based-image-easily-with-srcset-bc779881b80a) - This helped me when it came to figuring out how to display different image based on screen size. I couldn't get it to work using regular media queries.
- [Generate a CSS Color Gradient](https://mycolor.space/gradient?ori=to+right&hex=%23FA6057&hex2=%23F95776&sub=1) - This is a CSS Color Gradient generator.

## Author
- Frontend Mentor - [@yaoamegandjin](https://www.frontendmentor.io/profile/yaoamegandjin)
