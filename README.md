# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
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

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content

### Screenshot

![Screenshot](<assets/images/Screenshot 2023-08-13 201845.png>)

![Screenshot](<assets/images/Screenshot 2023-08-13 201917.png>)

![Screenshot](<assets/images/Screenshot 2023-08-13 201956.png>)

![Screenshot](<assets/images/Screenshot 2023-08-13 202009.png>)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

Asynchronous JavaScript is one those concept i never understood.
JSON, however seems relatively simple. I am learning how to use to use fetch() and then()...since these are mainly used with APIs, one must learn APIs as well.

```js
fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  })
```

### Continued development

JSON, if not the entirety of JavaScript, is one of those concepts 
i never thought i ever had to learn/master. This challange has reminded me about the significance of asynchronous JS.

### Useful resources

- [Tutorials Tonight](https://www.tutorialstonight.com/read-json-file-in-javascript) - This helped me with json file reading, writing etc.

## Author

- Frontend Mentor - [@NxumaloDev](https://www.frontendmentor.io/profile/NxumaloDev)

## Acknowledgments

- FrontEnd Mentor
- Tutorials Tonight