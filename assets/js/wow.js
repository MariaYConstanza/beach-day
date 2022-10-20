var generateBtn = document.getElementById("wowButton");
generateBtn.addEventListener("click", getWow);
const options = { method: 'GET', headers: { accept: 'application/json' } };
// generates a random audio clip from the api // can be used to more data about the film origin of the audio clip as well
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