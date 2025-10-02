const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

document.getElementById("reviewCount").textContent = 
    `Number of reviews = ${reviewCount}!`
