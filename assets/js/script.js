'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



document.addEventListener("DOMContentLoaded", function () {
  const text = "Dhrumit Savaliya"; 
  const typingText = document.querySelector(".typing-text");

  function typeWriter(text, i) {
      if (i < text.length) {
          typingText.textContent += text.charAt(i);
          setTimeout(() => typeWriter(text, i + 1), 100);
      } else {
          
          setTimeout(() => {
              typingText.textContent = ""; 
              setTimeout(() => typeWriter(text, 0), 1000); 
          }, 5000); 
      }
  }

  typeWriter(text, 0);
});
