// script for map API
function generateMap() {
    // arcGIS API call logic
    require([
        "esri/config",
        "esri/Map",
        "esri/views/MapView",
        "esri/rest/locator",


    ], function (esriConfig, Map, MapView, locator) {
        esriConfig.apiKey = config.myKey;

        const map = new Map({
            basemap: "oceans", // Basemap layer service

        });

        const view = new MapView({
            container: "viewDiv", //html id location for map
            map: map,
            center: [-80.1500, 25.7600], //starting location of map -- longitude, latitude
            zoom: 13
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
                var long = Math.round(pt.longitude * 10000) / 10000;
                var lat = Math.round(pt.latitude * 10000) / 10000;
                view.popup.open({
                    title: + Math.round(pt.longitude * 100000) / 100000 + ", " + Math.round(pt.latitude * 100000) / 100000,
                    content: address,
                    location: pt
                });

                // calls weather.gov API for lattitude and longitude based weather
                function check(long, lat){
                    console.log(long);
                    console.log(lat);
                    fetch("https://api.weather.gov/points/"+lat+","+long)
                    .then(function (response){
                        return response.json();
                    })
                    .then (function (data) {
                        console.log(data.properties.forecast);
                        fetch(data.properties.forecast)
                        .then(function (resposne2){
                            return resposne2.json();
                        })
                        .then(function (data2) {
                            console.log(data2)
                        })}
                    )
                };

                check(long, lat);
            }
        });
    });
};


generateMap();