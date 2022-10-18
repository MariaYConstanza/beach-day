fetch('https://api.marea.ooo/v2/tides?duration=1440&interval=60&latitude=44.414&longitude=-2.097&model=FES2014&datum=MSL', {
    headers: {
        'Accept': 'application/json',
        'x-marea-api-token': '5db9c91e-62b7-42f6-9330-aa7665f510c2'
    }
});

tides()

// curl -X GET "https://api.marea.ooo/v2/tides?duration=1440&interval=60&latitude=44.414&longitude=-2.097&model=FES2014&datum=MSL" \
//  -H "Accept: application/json" \
//  -H "x-marea-api-token: 5db9c91e-62b7-42f6-9330-aa7665f510c2"