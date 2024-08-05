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

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.portfolio-card');
  
  cards.forEach(function (card) {
      const viewBtn = card.querySelector('.view-project');
      const closeBtn = card.querySelector('.close-btn');

      viewBtn.addEventListener('click', function () {
          card.style.transform = 'rotateY(180deg)';
      });

      closeBtn.addEventListener('click', function () {
          card.style.transform = 'rotateY(0deg)';
      });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const text = "Dhrumit Savaliya"; // Change this to your desired name
  const typingText = document.querySelector(".typing-text");
  
  function typeWriter(text, i) {
      if (i < text.length) {
          typingText.textContent += text.charAt(i);
          setTimeout(() => typeWriter(text, i + 1), 100);
      }
  }
  
  typeWriter(text, 0);
});


  document.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const icons = document.querySelectorAll('.abs-icon');
    
    icons.forEach(icon => {
      const rect = icon.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const angle = (scrollTop / 15) % 360; // Calculate rotation angle based on scroll position
      const distance = 20; // Distance from the center to move in a circular pattern

      // Calculate the new position based on the angle
      const newX = centerX + distance * Math.cos(angle * (Math.PI / 100)) - centerX;
      const newY = centerY + distance * Math.sin(angle * (Math.PI / 110)) - centerY;

      // Apply the transformatio
      icon.style.transform = `translate(${newX}px, ${newY}px)`;
    });
  });

