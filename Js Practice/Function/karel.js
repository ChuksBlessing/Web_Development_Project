/**
 * Practise Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
    //your code here
    threeBeeper();
    moveLeft();
    twoBeeper();
    moveRight();
    threeBeeper();
    moveLeft();
    twoBeeper();
    moveRight();
    threeBeeper();
 }
 
 function threeBeeper(){
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
 }
 
 function moveLeft(){
    turnLeft();
    move();
    turnLeft();
 }
 
 function twoBeeper(){
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }
 
 function moveRight(){
    turnRight();
    move();
    turnRight();
 }