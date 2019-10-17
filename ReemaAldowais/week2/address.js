function getRandomElement(array) {
    
    return array[Math.floor(Math.random() * array.length)];
}
var template = [streetNumber, streetName, cityName, stateName, zipCode];

function getRandomAddress() {
    return template.map(getRandomElement).join(" ");
}

var streetNumber = ["2000", "4000", "5000", "6000", "7000"];
var streetName = ["Ahmed bin mojahed street", "altakasusi street", "turki alawal street",  "altahlya street", "almadina  street"];
var cityName = ["Riyadh", "Dammam", "Jedda", "Makka", "Maddena", "Haiel"];
var stateName = [ "North State", "East State", "South State", "West State"];
var zipCode = ["1111", "2222", "3333", "4444", "5555", "6666"];

var template = [streetNumber, " ", streetName, ", ", cityName, " ", stateName, ", ", zipCode];

function getRandomAddress() {
  return template.map(getRandomElement).join("");
}

function getRandomElement(array) {
  if (array instanceof Array) return array[Math.floor(Math.random() * array.length)];
  else return array;
}

 document.querySelector("#refresh").addEventListener("click", function( ){


    

  document.querySelector("#output").textContent = getRandomAddres();
}); 
  