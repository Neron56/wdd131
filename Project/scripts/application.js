let postCount = Number(localStorage.getItem("postCount")) || 0;

postCount++;
localStorage.setItem("postCount", postCount);

document.getElementById("postCount").textContent = 
    `You've posted/submitted  ${postCount} requests/gatherings!`
