function whosPaying(names) {
    let randomPosition = Math.floor(Math.random() * (names.length));
    
    let randomName = names [randomPosition];
    return randomName + " is going to buy lunch today!";
}

let lunchWinner = whosPaying(["Alice", "Bob", "Charlie", "David", "Eve"]);
console.log(lunchWinner);