var generateBtn = document.getElementById("wowButton");
generateBtn.addEventListener("click", getWow)
const options = {method: 'GET', headers: {accept: 'application/json'}};

function getWow() {
fetch('https://owen-wilson-wow-api.onrender.com/wows/random', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err))}