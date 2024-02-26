let userName = prompt("Your name: ");
let partnerName = prompt("Your partner's name: ");
let compatibility = Math.random() * 100;
console.log("You are " + Math.round(compatibility) + "% compatible with " + partnerName + ".");
if (compatibility < 50){
    console.log("You are not a good match.");
} else if (compatibility > 50 && compatibility < 70) {
    console.log("You are a good match. Put in the work and make beautiful home");
} else {
    console.log("You are a great match. You are a power couple.");
}