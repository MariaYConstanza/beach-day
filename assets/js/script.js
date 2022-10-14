// test function for checking weather API
function check(){
    fetch("https://api.weather.gov/points/38.8894,-77.0352")
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
}

check();