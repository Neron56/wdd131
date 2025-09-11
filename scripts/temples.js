const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
const nav = document.querySelector("#navigation");
const links = document.querySelector("#links");
const icon = document.querySelector("#icon");
let menu = "closed"
icon.addEventListener("click", () => {
    menu = hamburger(menu)
})
function hamburger(menu) {    
        if (menu === "closed"){
            menu = "open";
            links.style.display = "block";
            icon.innerHTML = "<img src='images/closeIcon.png' alt='hamburger menu' width='30px'>"
            return menu
        } else {
            menu = "closed";
            links.style.display = "none";
            icon.innerHTML = "<img src='images/hamburgerIcon.png' alt='hamburger menu' width='30px'>"
            return menu
        }
}