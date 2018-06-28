//* 1. Array of Cities *//
const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
var citySplit = gotCitiesCSV.split(",")
console.log(citySplit);

//* 2. Words of Best Thing *//
const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit"
var bestSplit = bestThing.split(" ");
console.log(bestSplit);

//* 3. Commas to Semi-Colons *//
var citySplitsemicolon = citySplit.join(";");
console.log(citySplitsemicolon);

//* 4. CSV *//
const lotrCitiesArray = ["Mordor", "Gondor", "Rohan", "Beleriand", "Mirkwood", "Dead Marshes", "Rhun", "Harad"];
var lotrCitiesString = lotrCitiesArray.join(",");
console.log(lotrCitiesString);

//* 5. Last 5 Cities *//
console.log(lotrCitiesArray.slice(3));

//* 6. Remove Rohan using Splice *//
var pos = lotrCitiesArray.indexOf("Rohan")
console.log(pos)
lotrCitiesArray.splice(pos, 1);
console.log(lotrCitiesArray);

//* 7. Display characters between the 23rd and 38th position of bestThing using slice *//
var b = bestThing.string.substring(23, 38);
console.log(b);

//* 8. Find and display the index of "only" in bestThing *//
var indexOnly = bestThing.indexof("only");
var only = bestThing.slice(indexOnly, indexOnly + 4);
console.log(only);

//* 9. Find and display all cities from gotCitiesCSV that use double vowels ("aa","ee", etc.) *//
function doubleVowel() {
    var citySplit = []
    for (let city of citySplit) {
        if (city.includes("aa") || city.includes('ee') || city.includes("ii") || city.includes("oo") || city.includes("uu")) {
            console.log(citySplit);
            citySplit.push(city)
        }
    }

}

doubleVowel

//* 10. Sort lotrCitiesArray by the number of characters in each city (i.e., shortest city names go first)*//
//var numbcharacters = lotrCitiesArray;
//numbcharacters.sort(function (a, b)); {
  //  return a.length - b.length;

    //console.log(numbcharacters.sort(a, b));

//}