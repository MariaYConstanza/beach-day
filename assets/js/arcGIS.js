// This calls the API, just update the url to have your key's name.

async function fetchKey() {
    const url = 'https://yorkieportunus.herokuapp.com/store/beachDayApp'
    const response = await fetch(url);
    const key = await response.json();
    return key;
}
// Call this wherever you need your key.
fetchKey().then((key) => {
    secretKey = key.apiKey;

});




// script for map API
function generateMap(longitude, latitude) {
    // if statements for generated longitude and latitude
    // pass longitude and latitude to map
    // or set start to -80.1500, 25.7600 ** Miami


    // arcGIS API call logic
    require([
        "esri/config",
        "esri/Map",
        "esri/views/MapView",
        "esri/rest/locator",


    ], function (esriConfig, Map, MapView, locator) {
        esriConfig.apiKey = secretKey;

        const map = new Map({
            basemap: "oceans", // Basemap layer service

        });

        const view = new MapView({
            container: "viewDiv", //html id location for map
            map: map,
            center: [longitude, latitude], //starting location of map -- longitude, latitude
            zoom: 10
        });
        // API call for arcGIS location
        const serviceUrl = "http://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";

        view.on("click", function (evt) {
            const params = {
                location: evt.mapPoint
            };

            // takes click location and generates closest address to clicked location
            locator.locationToAddress(serviceUrl, params)
                .then(function (response) { // Show the address found
                    console.log(response.address)
                    const address = response.address;
                    showAddress(address, evt.mapPoint);
                }, function (err) { // Show no address found
                    showAddress("No address found.", evt.mapPoint);
                });
            // generates the longitude and latitude then displays it at point of click within API widget
            function showAddress(address, pt) {
                var longitude = Math.round(pt.longitude * 10000) / 10000;
                var latitude = Math.round(pt.latitude * 10000) / 10000;
                view.popup.open({
                    title: + Math.round(pt.longitude * 100000) / 100000 + ", " + Math.round(pt.latitude * 100000) / 100000,
                    content: address,
                    location: pt
                });
                check(longitude, latitude);


            }
        });
    });
};

// calls weather.gov API for latitude and longitude based weather
function check(longitude, latitude) {
    console.log(longitude);
    console.log(latitude);
    fetch("https://api.weather.gov/points/" + latitude + "," + longitude)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.properties.forecast);
            fetch(data.properties.forecast)
                .then(function (resposne2) {
                    return resposne2.json();
                })
                .then(function (data2) {
                    console.log(data2);
                    console.log(data2.properties.periods[0]); //current weather
                })
        }
        )
};
// event for click to take input and set map to that location
// pass input to set the center in function, start map on "display map" click
// if no input, generate map to start at Miami
// need to add features to map to include wind, tide, weather ect.

// https://api.tidesandcurrents.noaa.gov/api/prod/#requestResponse
// weather.gov tides specific API



// generateMap();

