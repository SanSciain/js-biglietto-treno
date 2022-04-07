// Variables
let userTrip = parseInt( prompt("How far do you wanna go? (km)") );
let userAge = parseInt (prompt("You Age"));
const ageMinor = 18;
const ageOver = 65;
const pricePerKm = 0.21;
const discountMinor = 20/100;
const discountOver = 40/100;
let message = "Standard";

console.log(userAge, typeof(userAge));

let priceWithoutDiscount = userTrip * pricePerKm;

if ( userAge < ageMinor ) {
    priceTotal = (priceWithoutDiscount - priceWithoutDiscount * discountMinor).toFixed(2);
    message = "Ridotto per minori";
} else if ( userAge > ageOver ) {
    priceTotal = (priceWithoutDiscount - priceWithoutDiscount * discountOver).toFixed(2);
    message = "Ridotto per over 65";
} else {
    priceTotal = (priceWithoutDiscount).toFixed(2);
}

console.log(message);
console.log(priceTotal, typeof(priceTotal));

document.getElementById("message").innerHTML = `Tipo biglietto: ${message}`
document.getElementById("price").innerHTML = `Prezzo Biglietto: ${priceTotal}`