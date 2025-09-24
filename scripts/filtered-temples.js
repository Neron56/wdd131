const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
const nav = document.querySelector("#navigation");
const icon = document.querySelector("#icon");

let menu = "closed"
icon.addEventListener("click", () => {
    menu = hamburger(menu)
})
function hamburger(menu) {    
        if (menu === "closed"){
            menu = "open";
            nav.style.display = "block";
            icon.innerHTML = "<img src='images/closeIcon.png' alt='hamburger menu' width='30px'>"
            return menu
        } else {
            menu = "closed";
            nav.style.display = "none";
            icon.innerHTML = "<img src='images/hamburgerIcon.png' alt='hamburger menu' width='30px'>"
            return menu
        }
}
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Meridian Idaho",
    location: "Meridian, Idaho, United States",
    dedicated: "2017, November, 19",
    area: 67331,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/meridian-idaho-temple/meridian-idaho-temple-60248.jpg"
  },
  {
    templeName: "Colonia Juárez Chihuahua Mexico",
    location: "Chihuahua, Mexico",
    dedicated: "1999, March, 7",
    area: 6800,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/colonia-juarez-chihuahua-mexico-temple/colonia-juarez-chihuahua-mexico-temple-49373.jpg"
  },
  {
    templeName: "Louisville Kentucky",
    location: "Crestwood, Kentucky, United States",
    dedicated: "2000, March, 19",
    area: 10700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/louisville-kentucky-temple/louisville-kentucky-temple-5829.jpg"
  }
];

createTempleCard(temples)

const home = document.querySelector("#home");
home.addEventListener("click", () => {
    createTempleCard(temples) ;
})
const old = document.querySelector("#old");
old.addEventListener("click", () => {
    oldtemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0].trim(), 10);
        return year < 1900
    });
    createTempleCard(oldtemples);
})
const newtemples = document.querySelector("#new");
newtemples.addEventListener("click", () => {
    newerTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0].trim(), 10);
        return year > 2000
    });
    createTempleCard(newerTemples)
})
const large = document.querySelector("#large");
large.addEventListener("click", () => {
    largeTemples = temples.filter(temple => temple.area > 90000);
    createTempleCard(largeTemples);
})
const small = document.querySelector("#small");
small.addEventListener("click", () => {
    smallTemples = temples.filter(temple => temple.area < 10000);
    createTempleCard(smallTemples);
})

function createTempleCard(filteredTemples) {
    document.querySelector(".res-grid").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("class", "picture")

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    })
}