randomNumber1 = Math.round((Math.random() * 5)+ 1);
randomNumber2 = Math.round((Math.random() * 5)+ 1);

const imagesPath1 = "./images/dice" + randomNumber1 + ".png"
const imagesPath2 = "./images/dice" + randomNumber2 + ".png"



// const imagesPath1 = `./images/dice${randomNumber1}.png`;
// const imagesPath2 = `./images/dice${randomNumber2}.png`;

document.querySelector(".img1").setAttribute("src", imagesPath1);
document.querySelector(".img2").setAttribute("src", imagesPath2);

const resultElement = document.getElementById('result');

// Compare dice values and update the h1 text accordingly
if (randomNumber1 > randomNumber2) {
    resultElement.textContent = 'Player 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
    resultElement.textContent = 'Player 2 Wins!';
} else {
    resultElement.textContent = 'It\'s a Draw!';
}