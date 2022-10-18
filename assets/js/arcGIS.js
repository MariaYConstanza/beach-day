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
    fetch("https://api.weather.gov/points/" + latitude + "," + longitude)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

            fetch(data.properties.forecast)
                .then(function (response2) {
                    return response2.json();
                })
                .then(function (data2) {
                    renderFutureForecast(data2);
                })

        }
        )
    getWow();
};

function renderFutureForecast(data2) {
    var futureForecast = document.getElementById('futureForecast');
    var currentWeatherEl = document.getElementById('currentWeather');
    var currentWeather = data2.properties.periods[0];
    var forecastWeather = [];
    // removes rendered forecast
    while (futureForecast.firstChild) {
        futureForecast.removeChild(futureForecast.firstChild)
    };
    while (currentWeatherEl.firstChild) {
        currentWeatherEl.removeChild(currentWeatherEl.firstChild)
    };

    forecastWeather.push(data2.properties.periods[2]);
    forecastWeather.push(data2.properties.periods[4]);
    forecastWeather.push(data2.properties.periods[6]);
    forecastWeather.push(data2.properties.periods[8]);
    forecastWeather.push(data2.properties.periods[10]);

    
    for (i = 0; i < forecastWeather.length; i++) {
       
        function showForecast() {

            var containerDiv = document.createElement('div');
            // containerDiv.classList.add('');
            var ulEl = document.createElement('ul');
            ulEl.classList.add('customForecast');
            ulEl.classList.add('text-gray-700');
            ulEl.classList.add('text-base');
            ulEl.classList.add('mb-4');
            var liEl1 = document.createElement('li'); // icon
            var liEl2 = document.createElement('li'); // name
            var liEl3 = document.createElement('li'); // wind
            var liEl4 = document.createElement('li'); // temp
            var liEl5 = document.createElement('li'); // short forecast
            var iconImg = '<img src="' + forecastWeather[i].icon + '"></img>'
            liEl1.innerHTML = iconImg;
            liEl2.textContent = forecastWeather[i].name;
            liEl3.textContent = forecastWeather[i].windDirection + " " + forecastWeather[i].windSpeed;
            liEl4.textContent = forecastWeather[i].temperature + " " + forecastWeather[i].temperatureUnit;
            liEl5.textContent = forecastWeather[i].shortForecast;
            ulEl.append(liEl2);
            ulEl.append(liEl5);
            ulEl.append(liEl1);
            ulEl.append(liEl4);
            ulEl.append(liEl3);
            containerDiv.append(ulEl);
            futureForecast.append(containerDiv);
        };

        showForecast();
        
    }
    function showCurrent() {

        var containerDiv = document.createElement('div');
        // containerDiv.classList.add('');
        var ulEl = document.createElement('ul');
        var liEl1 = document.createElement('li'); // icon
        var liEl2 = document.createElement('li'); // name
        var liEl3 = document.createElement('li'); // wind
        var liEl4 = document.createElement('li'); // temp
        var liEl5 = document.createElement('li'); // short forecast
        var iconImg = '<img src="' + currentWeather.icon + '"></img>'
        liEl1.innerHTML = iconImg;
        liEl2.textContent = currentWeather.name;
        liEl3.textContent = currentWeather.windDirection + " " + currentWeather.windSpeed;
        liEl4.textContent = currentWeather.temperature + " " + currentWeather.temperatureUnit;
        liEl5.textContent = currentWeather.shortForecast;
        ulEl.append(liEl2);
        ulEl.append(liEl5);
        ulEl.append(liEl1);
        ulEl.append(liEl4);
        ulEl.append(liEl3);
        containerDiv.append(ulEl);
        currentWeatherEl.append(containerDiv);
    };
    showCurrent();
};


