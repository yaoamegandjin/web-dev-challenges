# Frontend Mentor - Social links profile solution

This is a solution to the [Social links profile challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-links-profile-UG32l9m6dQ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See hover and focus states for all interactive elements on the page

### Screenshot

![alt text](image.png)

### Links

- Solution URL: [Add solution URL here]
- Live Site URL: [https://social-links-profile-main-ya.netlify.app]

## My process

### Built with

- Semantic HTML5 markup
- CSS 
- Javascript
- [React](https://reactjs.org/) - JS library

### What I learned
This was my first react challenges. Everything was a learning experience. Even setting up the react project was new. You can read documentation all you want but practice makes perfect. The little snippet of code below was the most challenges part of this challenge



```js
const [isHovered, setIsHovered] = useState(null);

const listOfSocials = socials.map(s => <li key={s.id} onMouseEnter={() => setIsHovered(s.id)} onMouseLeave={() => setIsHovered(null)} style={{ backgroundColor: isHovered === s.id ? '#c5f82a' : '#333333', color: isHovered === s.id ? 'black' : 'white'}}>{s.social}</li>);
```

### Continued development

Right now the goal is to continue practicing my react skills.

### Useful resources

- [React documentation](https://react.dev/) - Best place to learn react in my opinion is the official documentation.

## Author

- Frontend Mentor - [@yaoamegandjin](https://www.frontendmentor.io/profile/yaoamegandjin)
