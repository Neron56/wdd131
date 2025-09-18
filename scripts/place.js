const currentyear = document.querySelector("#currentyear");
const today = new Date();
const windChill = document.querySelector("#windChill")
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
let windSpeed = 14.4;
let temperature = 10;
function calculateWindChill(windSpeed, temperature){
    chill = 
}