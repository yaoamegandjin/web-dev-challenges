# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![alt text](image.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://news-homepage-main-ya.netlify.app]

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

This was my first time using CSS grid, now I understand why it is so useful. I tried implementing this UI without using grid and it was very difficult as the screen size got smaller. Doing it with grid is much easier.

```css

.grid-container {
  max-width: 1150px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(17, 1fr);
  column-gap: 2.3em;
}

.grid-container > nav {
  grid-column: 1 / span 3;
  grid-row: 2;
}

.grid-container > section:nth-child(2) {
  grid-column: 1 / span 2;
  grid-row: 4 / span 9;
}

.grid-container > section:nth-child(3) {
  grid-column: 3;
  grid-row: 4 / span 9;
}

.grid-container > section:nth-child(4) {
  grid-column: 1 / span 3;
  grid-row: 14 / span 2;
}

```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Build Layouts with CSS Grid #1 - CSS Grid Basics](https://www.youtube.com/watch?v=xPuYbmmPdEM) - Great tutorial on CSS grid
- [React Responsive Navbar Tutorial - Beginner React JS Project](https://www.youtube.com/watch?v=23BHwAFIZmk) - Provides a really simple tutorial on how to make a responsive navbar in React

## Author

- Frontend Mentor - [@yaoamegandjin](https://www.frontendmentor.io/profile/yaoamegandjin)

