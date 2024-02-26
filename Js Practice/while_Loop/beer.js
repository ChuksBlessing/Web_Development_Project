function beerOnWall(){
    let count = 99
    while (count >= 1){
        if (count > 2){
            console.log(count + " bottles of beer on the wall, "+ count + " bottles of beer.");
            console.log("Take one down, pass it around, " + (count -1) + " bottles of beer on the wall.");
        } else if (count === 2){
            console.log(count + " bottle of beer on the wall, " + count + " bottle of beer.");
            console.log("Take one down, pass it around, " + (count -1) + " bottle of beer on the wall."); 
        } else {
            console.log(count + " bottle of beer on the wall, " + count + " bottle of beer.");
            console.log("Take one down, pass it around, No more bottles of beer on the wall!")
        }
        count--;
    }

    
}
beerOnWall()