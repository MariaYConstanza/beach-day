var generateBtn = document.getElementById("wowButton");
generateBtn.addEventListener("click", getWow);
const options = { method: 'GET', headers: { accept: 'application/json' } };

function getWow() {
  fetch('https://owen-wilson-wow-api.onrender.com/wows/random', options)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      var audio = new Audio(data[0].audio);
      audio.play();
    })
    .catch(err => console.error(err))
}