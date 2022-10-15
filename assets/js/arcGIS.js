// script for map API
function generateMap() {

    require([
        "esri/config",
        "esri/Map",
        "esri/views/MapView",



    ], function (esriConfig, Map, MapView) {
        esriConfig.apiKey = config.myKey;

        const map = new Map({
            basemap: "oceans", // Basemap layer service
            ground: "world-elevation",
        });

        const view = new MapView({
            container: "viewDiv",
            map: map,
            center: [-81.2001, 28.6024],
            zoom: 13
        });


    });
};
generateMap();