# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT).

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

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./images/Screenshot%202024-12-13%20160040.png)
![](./images/Screenshot%202024-12-13%20160103.png)
![](./images/Screenshot%202024-12-13%20160113.png)
![](./images/Screenshot%202024-12-13%20160132.png)

### Links

- Live Site URL: [here](https://kirlosbasta.github.io/article-preview-component/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- JavaScript
- [Tailwindcss](https://tailwindcss.com/) - For styles

### What I learned

I learned how to use and configure tailwindcss to style the page.

I learned also how to use the `classList.toggle` method to toggle between classes in JavaScript. I also learned how to use the `eventListener` method to listen for events on the share button and toggle the share links when the button is clicked.

```js
function toggelShareOption() {
  const viewport = window.innerWidth;
  if (viewport > 800) {
    tooltip.classList.toggle('hidden');
  } else {
    normalStateDiv.classList.toggle('hidden');
    activeStateDiv.classList.toggle('hidden');
  }
}
```

### Continued development

I will continue to use tailwindcss in my projects and learn more about it. I will also continue to learn more about JavaScript and how to use it to make my projects more interactive.

## Author

- Frontend Mentor - [@kirlosbasta](https://www.frontendmentor.io/profile/kirlosbasta)
- LinkedIn - [kirlos-basta](https://www.linkedin.com/in/kirlos-basta/)
