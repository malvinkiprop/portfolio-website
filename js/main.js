"use strict";

/*
 * Portfolio Website
 * Main JavaScript
 */


/* =========================================
   SMOOTH SCROLLING
   ========================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================
   CURRENT YEAR
   ========================================= */

const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


console.log("Malvin Kiprop Kiplagat portfolio loaded.");