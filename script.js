let level = 1;
let mode = 0;
let numberOfFaces = 0;
const theLeftSide = document.querySelector("#leftSide");
const theRightSide = document.querySelector("#rightSide");

function easy() {
    mode = 2;
    numberOfFaces = 2;
    generateFaces();
    
}

function normal() {
    mode = 5;
    numberOfFaces = 5;
    generateFaces();
}

function hard() {
    mode = 8;
    numberOfFaces = 8;
    generateFaces();
}

function restartGame() {
    location.reload();
}

function generateFaces() {
    for(i = 0; i < numberOfFaces; i++) {
        let face = document.createElement("img");
        face.src = "images/cat.png";

        let randomTop = Math.floor(Math.random() * 400) + 1;
        let randomLeft = Math.floor(Math.random() * 400) + 1;

        face.style.top = randomTop + "px";
        face.style.left = randomLeft + "px";

        theLeftSide.appendChild(face);
    }

    const leftSideImages = theLeftSide.cloneNode(true);
    leftSideImages.removeChild(leftSideImages.lastChild);
    theRightSide.appendChild(leftSideImages);

    theLeftSide.lastChild.addEventListener("click", nextLevel);

    theLeftSide.addEventListener("click", gameOver);
}

function nextLevel() {
    event.stopPropagation();

    while(theLeftSide.firstChild) {
        theLeftSide.removeChild(theLeftSide.firstChild);
    }
    while(theRightSide.firstChild) {
        theRightSide.removeChild(theRightSide.firstChild);
    }

    numberOfFaces += mode;
    level++;
    document.getElementById("counter").innerHTML = "Level: " + level;
    generateFaces();
}

function gameOver() {
    theLeftSide.lastChild.style.border = " thick solid darkgrey";
    alert("Game Over! You made it to level " + level + "!");
    document.body.removeEventListener("click", gameOver);
    theLeftSide.lastChild.removeEventListener("click", nextLevel);
}