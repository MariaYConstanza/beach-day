// api key 9878347f-b060-480e-b198-7c2bf869297d
// endpoint http://www.worldtides.info/api/v3?

var generateBtn = document.getElementById("displayTides");
generateBtn.addEventListener("click", getTides);

const optionsTides = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

function getTides(event) {
  event.preventDefault();

  fetch(
    "http://www.worldtides.info/api/v3?heights&extremes&date={date}&lat={lat}&lon={lon}&days=7&key=9878347f-b060-480e-b198-7c2bf869297d",
    optionsTides
  )
    .then((response) => response.json())
    .then((response) => {
      //   var tideContainer = document.getElementById("");
      //   var tideElement = document.getElementById("");
      //   console.log(tideElement);
      console.log(response);
      //   tideElement.innerHTML =
      //   tideContainer.appendChild(tideElement);
    })
    .catch((err) => console.error(err));
}