const currentyear = document.querySelector("#currentyear");
const today = new Date();
currentyear.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
const campaigns = [
    {
        "id" : "0",
        "name" : "Dungeon Seekers",
        "playerCount" : "4/7",
        "dmStatus": "no",
        "description": "A group of 6 clerics seeking a thrilling adventure. Here to cleanse the lands of demons and evil.",
        "startDate": "12/25/26",
        "meetingCity": "Layton, Utah",
    },
    {
        "id" : "1",
        "name" : "An Oppressive Gloom",
        "playerCount" : "1/5",
        "dmStatus": "yes",
        "description": "The party exists a large ship, after a long and ardous journey. While they take in their surroundings, suddenly, the sky goes dark grey...",
        "startDate": "4/27/26",
        "meetingCity": "Logan, Utah",
    },
    {
        "id" : "2",
        "name" : "Jolly Quartet",
        "playerCount" : "4/5",
        "dmStatus": "no",
        "description": "A band of bards who love getting into trouble, and often find themselves there whether they want to or not...",
        "startDate": "1/15/26",
        "meetingCity": "Roy, Utah",
    },
    {
        "id" : "3",
        "name" : "Suspicious Ruffians",
        "playerCount" : "2/5",
        "dmStatus": "yes",
        "description": "A band of barbarians have moved into town and caused quite the ruccus. Turns out their intentions are a little more nefarious than they let on...",
        "startDate": "11/7/25",
        "meetingCity": "Provo, Utah",
    },
]
function createTable(campaigns) {
    campaigns.forEach(element => {
        let row = document.createElement("tr");
        let campaignName = document.createElement("td");
        let playerAmount = document.createElement("td");
        let currentDm = document.createElement("td");
        let shortDescription = document.createElement("td");
        let startingDate = document.createElement("td");
        let meetingPlace = document.createElement("td");
        let button = document.createElement("td");
        
        campaignName.textContent = element.name;
        playerAmount.textContent = element.playerCount;
        if (element.dmStatus == "no" ){
            currentDm.innerHTML = `<input type='checkbox' disabled>`;
        }
        else {
            currentDm.innerHTML = `<input class='checkbox' type='checkbox' disabled checked>`;
        }   
        shortDescription.textContent = element.description;
        startingDate.textContent = element.startDate;
        meetingPlace.textContent = element. meetingCity;
        button.innerHTML = `<button id=${element.id} class="tableButton">Campaign Request</button>`;
        button.addEventListener("click", () =>{
            fillForm(element.id)
        })
        
        row.appendChild(campaignName);
        row.appendChild(playerAmount);
        row.appendChild(currentDm);
        row.appendChild(shortDescription);
        row.appendChild(startingDate);
        row.appendChild(meetingPlace);
        row.appendChild(button);
        
        document.querySelector("#partyTable").appendChild(row);
    });
}
function fillForm(campaignId){
    let title = document.querySelector("#campaignName")
    let description = document.querySelector("#shortDescription")

    campaigns.forEach(element => {
        if (campaignId == element.id){
            title.textContent =  element.name
            description.textContent = element.description

        }
    })
}

createTable(campaigns);