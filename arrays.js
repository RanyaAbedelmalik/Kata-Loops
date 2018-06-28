console.log(gotCitiesCSV.split (","))
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"
const gotCitiesCSV = "King's Landing; Braavos; Volantis; Old Valyria; Free Cities; Qarth; Meereen";
const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

let citiesArray = gotCitiesCSV.split(",");
let kata1 = document.createElement("div");
kata1.textContent = JSON.stringify(citiesArray);
document.body.insertAdjacentElement("beforeend",kata1);

let words = bestThing.split(" ");
document.write(JSON.stringify(words));

let semiColons = citiesArray.join(';')
document.write(JSON.stringify(semiColons));