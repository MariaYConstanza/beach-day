// list of active NOAA water level observation as of 10/17/2022
var stationID = {
    alabama: [
        {
            locationName: "Dauphin Island, AL",
            stationNumber: "8735180",
        },
        {
            locationName: "Dog River Bridge, AL",
            stationNumber: "8735391",
        },
        {
            locationName: "East Fowl River Bridge, AL",
            stationNumber: "8735523",
        },
        {
            locationName: "Coast Guard Sector Mobile, AL",
            stationNumber: "8736897",
        },
        {
            locationName: "Mobile State Docks, AL",
            stationNumber: "8737048",
        },
        {
            locationName: "Chickasaw Creek, AL",
            stationNumber: "8737138",
        },
        {
            locationName: "West Fowl River Bridge, AL",
            stationNumber: "8738043",
        },
        {
            locationName: "Bayou La Batre Bridge, AL",
            stationNumber: "8739803",
        }
    ],
    alaska: [
        {
            locationName: "Ketchikan, AK",
            stationNumber: "9450460",
        },
        {
            locationName: "Port Alexander, AK",
            stationNumber: "9451054",
        },
        {
            locationName: "Sitka, AK",
            stationNumber: "9451600",
        },
        {
            locationName: "Juneau, AK",
            stationNumber: "9452210",
        },
        {
            locationName: "Skagway, Taiya Inlet, AK",
            stationNumber: "9452400",
        },
        {
            locationName: "Elfin Cove, AK",
            stationNumber: "9452634",
        },
        {
            locationName: "Yakutat, Yakutat Bay, AK",
            stationNumber: "9453220",
        },
        {
            locationName: "Cordova, AK",
            stationNumber: "9454050",
        },
        {
            locationName: "Valdez, AK",
            stationNumber: "9454240",
        },
        {
            locationName: "Seward, AK",
            stationNumber: "9455090",
        },
        {
            locationName: "Seldovia, AK",
            stationNumber: "9455500",
        },
        {
            locationName: "Nikiski, AK",
            stationNumber: "9455760",
        },
        {
            locationName: "Anchorage, AK",
            stationNumber: "9455920",
        },
        {
            locationName: "Kodiak Island, AK",
            stationNumber: "9457292",
        },
        {
            locationName: "Alitak, AK",
            stationNumber: "9457804",
        },
        {
            locationName: "Sand Point, AK",
            stationNumber: "9459450",
        },
        {
            locationName: "King Cove, AK",
            stationNumber: "9459881",
        },
        {
            locationName: "Adak Island, AK",
            stationNumber: "9461380",
        },
        {
            locationName: "Atka, AK",
            stationNumber: "9461710",
        },
        {
            locationName: "Nikolski, AK",
            stationNumber: "9462450",
        },
        {
            locationName: "Unalaska, AK",
            stationNumber: "9462620",
        },
        {
            locationName: "Port Moller, AK",
            stationNumber: "9463502",
        },
        {
            locationName: "Village Cove, St Paul Island, AK",
            stationNumber: "9464212",
        },
        {
            locationName: "Unalakleet, AK",
            stationNumber: "9468333",
        },
        {
            locationName: "Nome, Norton Sound, AK",
            stationNumber: "9468756",
        },
        {
            locationName: "Red Dog Dock, AK",
            stationNumber: "9491094",
        },
        {
            locationName: "Prudhoe Bay, AK",
            stationNumber: "9497645",
        }
    ],
    bermuda: [
        {
            locationName: "Bermuda Biological Station,",
            stationNumber: "2695535",
        },
        {
            locationName: "Bermuda, St. Georges Island, Bermuda",
            stationNumber: "2695540",
        }
    ],
    california: [
        {
            locationName: "San Diego, San Diego Bay, CA",
            stationNumber: "9410170",
        },
        {
            locationName: "La Jolla, CA",
            stationNumber: "9410230",
        },
        {
            locationName: "Los Angeles, CA",
            stationNumber: "9410660",
        },
        {
            locationName: "Santa Monica, CA",
            stationNumber: "9410840",
        },
        {
            locationName: "Santa Barbara, CA",
            stationNumber: "9411340",
        },
        {
            locationName: "Oil Platform Harvest, CA",
            stationNumber: "9411406",
        },
        {
            locationName: "Port San Luis, CA",
            stationNumber: "9412110",
        },
        {
            locationName: "Monterey, CA",
            stationNumber: "9413450",
        },
        {
            locationName: "San Francisco, CA",
            stationNumber: "9414290",
        },
        {
            locationName: "Redwood City, CA",
            stationNumber: "9414523",
        },
        {
            locationName: "Alameda, CA",
            stationNumber: "9414750",
        },
        {
            locationName: "Richmond, CA",
            stationNumber: "9414863",
        },
        {
            locationName: "Point Reyes, CA",
            stationNumber: "9415020",
        },
        {
            locationName: "Martinez-Amorco Pier, CA",
            stationNumber: "9415102",
        },
        {
            locationName: "Port Chicago, CA",
            stationNumber: "9415144",
        },
        {
            locationName: "Arena Cove, CA",
            stationNumber: "9416841",
        },
        {
            locationName: "North Spit, CA",
            stationNumber: "9418767",
        },
        {
            locationName: "Crescent City, CA",
            stationNumber: "9419750",
        }
    ],
    caribbean: [
        {
            locationName: "Christiansted Harbor, St Croix, VI",
            stationNumber: "9751364",
        },
        {
            locationName: "Lameshur Bay, St John, VI",
            stationNumber: "9751381",
        },
        {
            locationName: "Lime Tree Bay, VI",
            stationNumber: "9751401",
        },
        {
            locationName: "Charlotte Amalie, VI",
            stationNumber: "9751639",
        },
        {
            locationName: "Culebra, PR",
            stationNumber: "9752235",
        },
        {
            locationName: "Isabel Segunda, Vieques Island, PR",
            stationNumber: "9752619",
        },
        {
            locationName: "Esperanza, Vieques Island, PR",
            stationNumber: "9752695",
        },
        {
            locationName: "San Juan, La Puntilla, San Juan Bay, PR",
            stationNumber: "9755371",
        },
        {
            locationName: "Arecibo, PR",
            stationNumber: "9757809",
        },
        {
            locationName: "Magueyes Island, PR",
            stationNumber: "9759110",
        },
        {
            locationName: "Mayaguez, PR",
            stationNumber: "9759394",
        },
        {
            locationName: "Mona Island",
            stationNumber: "9759938",
        }
    ],
    connecticut: [
        {
            locationName: "New London, CT",
            stationNumber: "8461490",
        },
        {
            locationName: "New Haven, CT",
            stationNumber: "8465705",
        },
        {
            locationName: "Bridgeport, CT",
            stationNumber: "8467150",
        }
    ],
    delaware: [
        {
            locationName: "Delaware City, DE",
            stationNumber: "8551762",
        },
        {
            locationName: "Reedy Point, DE",
            stationNumber: "8551910",
        },
        {
            locationName: "Brandywine Shoal Light, DE",
            stationNumber: "8555889",
        },
        {
            locationName: "Lewes, DE",
            stationNumber: "8557380",
        }
    ],
    dc: [
        {
            locationName: "Washington, DC",
            stationNumber: "8594900",
        }
    ],
    florida: [
        {
            locationName: "Fernandina Beach, FL",
            stationNumber: "8720030",
        },
        {
            locationName: "Mayport (Bar Pilots Dock), FL",
            stationNumber: "8720218",
        },
        {
            locationName: "Dames Point, FL",
            stationNumber: "8720219",
        },
        {
            locationName: "Southbank Riverwalk, St Johns River, FL",
            stationNumber: "8720226",
        },
        {
            locationName: "I-295 Buckman Bridge, FL",
            stationNumber: "8720357",
        },
        {
            locationName: "Trident Pier, Port Canaveral, FL",
            stationNumber: "8721604",
        },
        {
            locationName: "Lake Worth Pier, Atlantic Ocean, FL",
            stationNumber: "8722670",
        },
        {
            locationName: "South Port Everglades, FL",
            stationNumber: "8722956",
        },
        {
            locationName: "Virginia Key, Biscayne Bay, FL",
            stationNumber: "8723214",
        },
        {
            locationName: "Vaca Key, Florida Bay, FL",
            stationNumber: "8723970",
        },
        {
            locationName: "Key West, FL",
            stationNumber: "8724580",
        },
        {
            locationName: "Naples, Gulf of Mexico, FL",
            stationNumber: "8725110",
        },
        {
            locationName: "Fort Myers, FL",
            stationNumber: "8725520",
        },
        {
            locationName: "Port Manatee, FL",
            stationNumber: "8726384",
        },
        {
            locationName: "St. Petersburg, Tampa Bay, FL",
            stationNumber: "8726520",
        },
        {
            locationName: "Old Port Tampa, FL",
            stationNumber: "8726607",
        },
        {
            locationName: "East Bay, FL",
            stationNumber: "8726674",
        },
        {
            locationName: "Clearwater Beach, FL",
            stationNumber: "8726724",
        },
        {
            locationName: "Cedar Key, FL",
            stationNumber: "8727520",
        },
        {
            locationName: "Apalachicola, FL ",
            stationNumber: "8728690",
        },
        {
            locationName: "Panama City, FL",
            stationNumber: "8729108",
        },
        {
            locationName: "Panama City Beach, FL",
            stationNumber: "8729210",
        },
        {
            locationName: "Pensacola, FL",
            stationNumber: "8729840",
        }
    ],
    georgia: [
        {
            locationName: "Fort Pulaski, GA",
            stationNumber: "8670870",
        }
    ],
    detroitRiver: [
        {
            locationName: "Gibraltar, MI",
            stationNumber: "9044020",
        },
        {
            locationName: "Wyandotte, MI",
            stationNumber: "9044030",
        },
        {
            locationName: "Fort Wayne, MI",
            stationNumber: "9044036",
        },
        {
            locationName: "Windmill Point, MI",
            stationNumber: "9044049",
        }
    ],
    lakeErie: [
        {
            locationName: "Buffalo, NY",
            stationNumber: "9063020",
        },
        {
            locationName: "Sturgeon Point, NY",
            stationNumber: "9063028",
        },
        {
            locationName: "Erie, Lake Erie, PA",
            stationNumber: "9063038",
        },
        {
            locationName: "Fairport, OH",
            stationNumber: "9063053",
        },
        {
            locationName: "Cleveland, OH",
            stationNumber: "9063063",
        },
        {
            locationName: "Marblehead, OH",
            stationNumber: "9063079",
        },
        {
            locationName: "Toledo, OH",
            stationNumber: "9063085",
        },
        {
            locationName: "Fermi Power Plant, MI",
            stationNumber: "9063090",
        }
    ],
    lakeHuron: [
        {
            locationName: "Lakeport, MI",
            stationNumber: "9075002",
        },
        {
            locationName: "Harbor Beach, MI",
            stationNumber: "9075014",
        },
        {
            locationName: "Essexville, MI",
            stationNumber: "9075035",
        },
        {
            locationName: "Alpena, MI",
            stationNumber: "9075065",
        },
        {
            locationName: "Mackinaw City, MI",
            stationNumber: "9075080",
        },
        {
            locationName: "De Tour Village, MI",
            stationNumber: "9075099",
        }
    ],
    lakeMichigan: [
        {
            locationName: "Ludington, MI",
            stationNumber: "9087023",
        },
        {
            locationName: "Holland, MI",
            stationNumber: "9087031",
        },
        {
            locationName: "Calumet Harbor, IL",
            stationNumber: "9087044",
        },
        {
            locationName: "Milwaukee, WI",
            stationNumber: "9087057",
        },
        {
            locationName: "Kewaunee, Lake Michigan, WI",
            stationNumber: "9087068",
        },
        {
            locationName: "Sturgeon Bay Canal, WI",
            stationNumber: "9087072",
        },
        {
            locationName: "Green Bay East, WI",
            stationNumber: "9087077",
        },
        {
            locationName: "Menominee, MI",
            stationNumber: "9087088",
        },
        {
            locationName: "Port Inland, MI",
            stationNumber: "9087096",
        }
    ],
    lakeOntario: [
        {
            locationName: "Cape Vincent, NY",
            stationNumber: "9052000",
        },
        {
            locationName: "Oswego, NY",
            stationNumber: "9052030",
        },
        {
            locationName: "Rochester, NY",
            stationNumber: "9052058",
        },
        {
            locationName: "Olcott, NY",
            stationNumber: "9052076",
        }
    ],
    lakeStClair: [
        {
            locationName: "St Clair Shores, MI",
            stationNumber: "9034052",
        }
    ],
    lakeSuperior: [
        {
            locationName: "Point Iroquois, MI",
            stationNumber: "9099004",
        },
        {
            locationName: "Marquette C.G., MI",
            stationNumber: "9099018",
        },
        {
            locationName: "Ontonagon, MI",
            stationNumber: "9099044",
        },
        {
            locationName: "Duluth, MN",
            stationNumber: "9099064",
        },
        {
            locationName: "Grand Marais, Lake Superior, MN",
            stationNumber: "9099090",
        }
    ],
    niagaraRiver: [
        {
            locationName: "Ashland Ave, NY",
            stationNumber: "9063007",
        },
        {
            locationName: "American Falls, NY",
            stationNumber: "9063009",
        },
        {
            locationName: "Niagara Intake, NY",
            stationNumber: "9063012",
        }
    ],
    stClairRiver: [
        {
            locationName: "Algonac, MI",
            stationNumber: "9014070",
        },
        {
            locationName: "St. Clair State Police, MI",
            stationNumber: "9014080",
        },
        {
            locationName: "Dry Dock, MI",
            stationNumber: "9014087",
        },
        {
            locationName: "Mouth of the Black River, MI",
            stationNumber: "9014090",
        },
        {
            locationName: "Dunn Paper, MI",
            stationNumber: "9014096",
        },
        {
            locationName: "Fort Gratiot, MI",
            stationNumber: "9014098",
        }
    ],
    stLawrenceRiver: [
        {
            locationName: "Ogdensburg, NY",
            stationNumber: "8311030",
        },
        {
            locationName: "Alexandria Bay, NY",
            stationNumber: "8311062",
        }
    ],
    stMarysRiver: [
        {
            locationName: "Rock Cut, MI",
            stationNumber: "9076024",
        },
        {
            locationName: "West Neebish Island, MI",
            stationNumber: "9076027",
        },
        {
            locationName: "Little Rapids, MI",
            stationNumber: "9076033",
        },
        {
            locationName: "U.S. Slip, MI",
            stationNumber: "9076060",
        },
        {
            locationName: "S.W. Pier, St. Marys River, MI",
            stationNumber: "9076070",
        }
    ],
    hawaii: [
        {
            locationName: "Nawiliwili, HI",
            stationNumber: "1611400",
        },
        {
            locationName: "Honolulu, HI",
            stationNumber: "1612340",
        },
        {
            locationName: "Mokuoloe, HI",
            stationNumber: "1612480",
        },
        {
            locationName: "Kahului, Kahului Harbor, HI",
            stationNumber: "1615680",
        },
        {
            locationName: "Kawaihae, HI",
            stationNumber: "1617433",
        },
        {
            locationName: "Hilo, Hilo Bay, Kuhio Bay, HI",
            stationNumber: "1617760",
        }
    ],
    louisiana: [
        {
            locationName: "Pilottown, LA",
            stationNumber: "8760721",
        },
        {
            locationName: "Pilots Station East, S.W. Pass, LA",
            stationNumber: "8760922",
        },
        {
            locationName: "Shell Beach, LA",
            stationNumber: "8761305",
        },
        {
            locationName: "Grand Isle, LA",
            stationNumber: "8761724",
        },
        {
            locationName: "New Canal Station, LA",
            stationNumber: "8761927",
        },
        {
            locationName: "Carrollton, LA",
            stationNumber: "8761955",
        },
        {
            locationName: "Port Fourchon, Belle Pass, LA",
            stationNumber: "8762075",
        },
        {
            locationName: "West Bank 1, Bayou Gauche, LA",
            stationNumber: "8762482",
        },
        {
            locationName: "Berwick, Atchafalaya River, LA",
            stationNumber: "8764044",
        },
        {
            locationName: "LAWMA, Amerada Pass, LA",
            stationNumber: "8764227",
        },
        {
            locationName: "Eugene Island, North of, Atchafalaya Bay,",
            stationNumber: "8764314",
        },
        {
            locationName: "Freshwater Canal Locks, LA",
            stationNumber: "8766072",
        },
        {
            locationName: "Lake Charles, LA",
            stationNumber: "8767816",
        },
        {
            locationName: "Bulk Terminal, LA",
            stationNumber: "8767961",
        },
        {
            locationName: "Calcasieu Pass, LA",
            stationNumber: "8768094",
        }
    ],
    maine: [
        {
            locationName: "Eastport, ME",
            stationNumber: "8410140",
        },
        {
            locationName: "Cutler Farris Wharf, ME",
            stationNumber: "8411060",
        },
        {
            locationName: "Bar Harbor, ME",
            stationNumber: "8413320",
        },
        {
            locationName: "Portland, ME",
            stationNumber: "8418150",
        },
        {
            locationName: "Seavey Island, ME",
            stationNumber: "8419870",
        }
    ],
    maryland: [
        {
            locationName: "Ocean City Inlet, MD",
            stationNumber: "8570283",
        },
        {
            locationName: "Bishops Head, MD",
            stationNumber: "8571421",
        },
        {
            locationName: "Cambridge, MD",
            stationNumber: "8571892",
        },
        {
            locationName: "Tolchester Beach, MD",
            stationNumber: "8573364",
        },
        {
            locationName: "Chesapeake City, MD",
            stationNumber: "8573927",
        },
        {
            locationName: "Baltimore, MD",
            stationNumber: "8574680",
        },
        {
            locationName: "Annapolis, MD",
            stationNumber: "8575512",
        },
        {
            locationName: "Solomons Island, MD",
            stationNumber: "8577330",
        }
    ],
    massachusetts: [
        {
            locationName: "Boston, MA",
            stationNumber: "8443970",
        },
        {
            locationName: "Fall River, MA",
            stationNumber: "8447386",
        },
        {
            locationName: "Chatham, MA",
            stationNumber: "8447435",
        },
        {
            locationName: "Woods Hole, MA",
            stationNumber: "8447930",
        },
        {
            locationName: "Nantucket Island, MA",
            stationNumber: "8449130",
        }
    ],
    mississippi: [
        {
            locationName: "Pascagoula NOAA Lab, MS",
            stationNumber: "8741533",
        },
        {
            locationName: "Bay Waveland Yacht Club, MS",
            stationNumber: "8747437",
        }
    ],
    newJersey: [
        {
            locationName: "Sandy Hook, NJ",
            stationNumber: "8531680",
        },
        {
            locationName: "Atlantic City, NJ",
            stationNumber: "8534720",
        },
        {
            locationName: "Cape May, NJ",
            stationNumber: "8536110",
        },
        {
            locationName: "Ship John Shoal, NJ",
            stationNumber: "8537121",
        },
        {
            locationName: "Burlington, Delaware River, NJ",
            stationNumber: "8539094",
        }
    ],
    newYork: [
        {
            locationName: "Montauk, NY",
            stationNumber: "8510560",
        },
        {
            locationName: "Kings Point, NY",
            stationNumber: "8516945",
        },
        {
            locationName: "The Battery, NY",
            stationNumber: "8518750",
        },
        {
            locationName: "Turkey Point Hudson River NERRS, NY",
            stationNumber: "8518962",
        },
        {
            locationName: "Bergen Point West Reach, NY",
            stationNumber: "8519483",
        }
    ],
    northCarolina: [
        {
            locationName: "Duck, NC",
            stationNumber: "8651370",
        },
        {
            locationName: "Oregon Inlet Marina, NC",
            stationNumber: "8652587",
        },
        {
            locationName: "USCG Station Hatteras, NC",
            stationNumber: "8654467",
        },
        {
            locationName: "Beaufort, Duke Marine Lab, NC",
            stationNumber: "8656483",
        },
        {
            locationName: "Wilmington, NC",
            stationNumber: "8658120",
        },
        {
            locationName: "Wrightsville Beach, NC",
            stationNumber: "8658163",
        }
    ],
    oregon: [
        {
            locationName: "Port Orford, OR",
            stationNumber: "9431647",
        },
        {
            locationName: "Charleston, OR",
            stationNumber: "9432780",
        },
        {
            locationName: "South Beach, OR",
            stationNumber: "9435380",
        },
        {
            locationName: "Garibaldi, OR",
            stationNumber: "9437540",
        },
        {
            locationName: "Astoria, OR",
            stationNumber: "9439040",
        },
        {
            locationName: "Wauna, OR",
            stationNumber: "9439099",
        },
        {
            locationName: "St Helens, OR",
            stationNumber: "9439201",
        }
    ],
    pacificIslands: [
        {
            locationName: "Sand Island, Midway Islands, United States of America",
            stationNumber: "1619910",
        },
        {
            locationName: "Apra Harbor, Guam, United States of America",
            stationNumber: "1630000",
        },
        {
            locationName: "Pago Bay, Guam, United States of America",
            stationNumber: "1631428",
        },
        {
            locationName: "Pago Pago, American Samoa, American Samoa",
            stationNumber: "1770000",
        },
        {
            locationName: "Kwajalein, Marshall Islands, United States of America",
            stationNumber: "1820000",
        },
        {
            locationName: "Wake Island, Pacific Ocean, United States of America",
            stationNumber: "1890000",
        }
    ],
    pennsylvania: [
        {
            locationName: "Marcus Hook, PA",
            stationNumber: "8540433",
        },
        {
            locationName: "Philadelphia, PA",
            stationNumber: "8545240",
        },
        {
            locationName: "Bridesburg, PA",
            stationNumber: "8546252",
        },
        {
            locationName: "Newbold, PA",
            stationNumber: "8548989",
        }
    ],
    rhodeIsland: [
        {
            locationName: "Newport, RI",
            stationNumber: "8452660",
        },
        {
            locationName: "Conimicut Light, RI",
            stationNumber: "8452944",
        },
        {
            locationName: "Providence, RI",
            stationNumber: "8454000",
        },
        {
            locationName: "Quonset Point, RI",
            stationNumber: "8454049",
        }
    ],
    southCarolina: [
        {
            locationName: "Springmaid Pier, SC",
            stationNumber: "8661070",
        },
        {
            locationName: "Charleston, SC",
            stationNumber: "8665530",
        }
    ],
    texas: [
        {
            locationName: "Port Arthur, TX",
            stationNumber: "8770475",
        },
        {
            locationName: "Rainbow Bridge, TX",
            stationNumber: "8770520",
        },
        {
            locationName: "Morgans Point, Barbours Cut, TX",
            stationNumber: "8770613",
        },
        {
            locationName: "Manchester, TX",
            stationNumber: "8770777",
        },
        {
            locationName: "High Island, TX",
            stationNumber: "8770808",
        },
        {
            locationName: "Texas Point, Sabine Pass, TX",
            stationNumber: "8770822",
        },
        {
            locationName: "Rollover Pass, TX",
            stationNumber: "8770971",
        },
        {
            locationName: "Eagle Point, Galveston Bay, TX",
            stationNumber: "8771013",
        },
        {
            locationName: "Galveston Bay Entrance, North Jetty, TX",
            stationNumber: "8771341",
        },
        {
            locationName: "Sabine Offshore Light",
            stationNumber: "8771367",
        },
        {
            locationName: "Galveston Pier 21, TX",
            stationNumber: "8771450",
        },
        {
            locationName: "Galveston Railroad Bridge, TX",
            stationNumber: "8771486",
        },
        {
            locationName: "San Luis Pass, TX",
            stationNumber: "8771972",
        },
        {
            locationName: "Freeport Harbor, TX",
            stationNumber: "8772471",
        },
        {
            locationName: "Sargent, TX",
            stationNumber: "8772985",
        },
        {
            locationName: "Seadrift, TX",
            stationNumber: "8773037",
        },
        {
            locationName: "Matagorda City, TX",
            stationNumber: "8773146",
        },
        {
            locationName: "Port Lavaca, TX",
            stationNumber: "8773259",
        },
        {
            locationName: "Port O'Connor, TX",
            stationNumber: "8773701",
        },
        {
            locationName: "Matagorda Bay Entrance Channel, TX",
            stationNumber: "8773767",
        },
        {
            locationName: "Aransas Wildlife Refuge, TX",
            stationNumber: "8774230",
        },
        {
            locationName: "Rockport, TX",
            stationNumber: "8774770",
        },
        {
            locationName: "La Quinta Channel North, TX",
            stationNumber: "8775132",
        },
        {
            locationName: "Viola Turning Basin, TX",
            stationNumber: "8775222",
        },
        {
            locationName: "Port Aransas, TX",
            stationNumber: "8775237",
        },
        {
            locationName: "Aransas, Aransas Pass, TX",
            stationNumber: "8775241",
        },
        {
            locationName: "Nueces Bay, TX",
            stationNumber: "8775244",
        },
        {
            locationName: "Enbridge, Ingleside, TX",
            stationNumber: "8775283",
        },
        {
            locationName: "USS Lexington, Corpus Christi Bay, TX",
            stationNumber: "8775296",
        },
        {
            locationName: "Packery Channel, TX",
            stationNumber: "8775792",
        },
        {
            locationName: "S. Bird Island, TX",
            stationNumber: "8776139",
        },
        {
            locationName: "Baffin Bay, TX",
            stationNumber: "8776604",
        },
        {
            locationName: "Rincon Del San Jose, TX",
            stationNumber: "8777812",
        },
        {
            locationName: "Port Mansfield, TX",
            stationNumber: "8778490",
        },
        {
            locationName: "Realitos Peninsula, TX",
            stationNumber: "8779280",
        },
        {
            locationName: "South Padre Island CG Station, TX",
            stationNumber: "8779748",
        },
        {
            locationName: "SPI Brazos Santiago, TX",
            stationNumber: "8779749",
        },
        {
            locationName: "Port Isabel, TX",
            stationNumber: "8779770",
        }
    ],
    virginia: [
        {
            locationName: "Wachapreague, VA",
            stationNumber: "8631044",
        },
        {
            locationName: "Kiptopeke, VA",
            stationNumber: "8632200",
        },
        {
            locationName: "Dahlgren, VA",
            stationNumber: "8635027",
        },
        {
            locationName: "Lewisetta, VA",
            stationNumber: "8635750",
        },
        {
            locationName: "Windmill Point, VA",
            stationNumber: "8636580",
        },
        {
            locationName: "Yorktown USCG Training Center, VA",
            stationNumber: "8637689",
        },
        {
            locationName: "Sewells Point, VA",
            stationNumber: "8638610",
        },
        {
            locationName: "CBBT, Chesapeake Channel, VA",
            stationNumber: "8638901",
        },
        {
            locationName: "Money Point, VA",
            stationNumber: "8639348",
        }
    ],
    washington: [
        {
            locationName: "Vancouver, WA",
            stationNumber: "9440083",
        },
        {
            locationName: "Longview, WA",
            stationNumber: "9440422",
        },
        {
            locationName: "Skamokawa, WA",
            stationNumber: "9440569",
        },
        {
            locationName: "Cape Disappointment, WA",
            stationNumber: "9440581",
        },
        {
            locationName: "Toke Point, WA",
            stationNumber: "9440910",
        },
        {
            locationName: "Westport, WA",
            stationNumber: "9441102",
        },
        {
            locationName: "La Push, Quillayute River, WA",
            stationNumber: "9442396",
        },
        {
            locationName: "Neah Bay, WA",
            stationNumber: "9443090",
        },
        {
            locationName: "Port Angeles, WA",
            stationNumber: "9444090",
        },
        {
            locationName: "Port Townsend, WA",
            stationNumber: "9444900",
        },
        {
            locationName: "Bremerton, WA",
            stationNumber: "9445958",
        },
        {
            locationName: "Tacoma, WA",
            stationNumber: "9446484",
        },
        {
            locationName: "Seattle, WA",
            stationNumber: "9447130",
        },
        {
            locationName: "Cherry Point, WA",
            stationNumber: "9449424",
        },
        {
            locationName: "Friday Harbor, WA",
            stationNumber: "9449880",
        }
    ],
}

function getStation(stationID){

}

function stationData() {
    fetch("https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations/" + stationID.alabama[0].stationNumber + ".json")
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            // data.stations[0].lat //lat of station
            // data.stations[0].lng //lon of station
            // data.stations[0].name //locationName of station
            fetch(data.stations[0].products.self)
                // 
                .then(function (response2) {
                    console.log(response2)
                    return response2.json()
                })
                .then(function (data2) {
                    console.log(data2.products[7].value)
                })

        })
}

stationData();