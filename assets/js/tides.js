function tides(){
    fetch('https://api.marea.ooo/v2/tides?duration=1440&interval=60&latitude=44.414&longitude=-2.097&model=FES2014&datum=MSL', {
        method: 'GET',
        headers: {
            'X-API-KEY': '5db9c91e-62b7-42f6-9330-aa7665f510c2',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(callData)
    })
    .then(response => response.json())
    .then(function(data) {
        console.log(data);
        let output = "";
        output += "<p>${data}</p>"
    })
    .catch(error => console.error(error));

    document.getElementById("output").innerHTML = output;
}

tides()

// curl -X GET "https://api.marea.ooo/v2/tides?duration=1440&interval=60&latitude=44.414&longitude=-2.097&model=FES2014&datum=MSL" \
//  -H "Accept: application/json" \
//  -H "x-marea-api-token: 5db9c91e-62b7-42f6-9330-aa7665f510c2"