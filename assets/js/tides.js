// api key 9878347f-b060-480e-b198-7c2bf869297d
// endpoint http://www.worldtides.info/api/v3?

// DOM
var tideContainer = document.getElementById("futureTides");

// Geolocation API
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    tideContainer.innerHTML = "Geolocation is not supported by this browser.";
  }
}

// Shows position and defines long and lat
function showPosition(position) {
  tideContainer.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
  console.log(position);
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
}

// Button for tides
var generateBtn = document.getElementById("displayTides");
generateBtn.addEventListener("click", getTides);

// API fetch
const optionsTides = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

function getTides(event) {
  event.preventDefault();
  fetch(
    "http://www.worldtides.info/api/v3?heights&extremes&days=7&lat=27.34&lon=-80.31&key=9878347f-b060-480e-b198-7c2bf869297d",
    optionsTides
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch(console.error);
}
