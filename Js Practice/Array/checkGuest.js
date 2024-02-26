function checkGuest(name){
    let guestList = ["Angela","jack", "Pan", "James", "Lara", "Jason"];
    if (guestList.includes(name)) {
        return ("Welcome to my Christmas party " + name + ".");
    } else
        return ("Sorry, you are not on my guest list, maybe next time.");
}

let name = prompt("what is your name?");
console.log(checkGuest(name));