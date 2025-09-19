const currentyear = document.querySelector("#currentyear");
const today = new Date();
const windChill = document.querySelector("#windChill")
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
let windSpeed = 34.5;
let temperature = 10;
function calculateWindChill(windSpeed, temperature){
  return (temperature <= 10 && windSpeed > 4.8) 
  ? Math.round((13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)) * 10) / 10
  : temperature;
}
windChill.innerHTML = `<span>${calculateWindChill(windSpeed, temperature)} &#8451;</span>`;