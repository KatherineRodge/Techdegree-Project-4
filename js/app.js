/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//global variables
let game = null;
const startButton = document.querySelector('#btn__reset');
const checkedLetterArray = document.getElementsByClassName('key');
let thisLetter = null;
let disabledArray = [];

function usedKeys(key){
  for(var h = 0; h < checkedLetterArray.length; h++) {
          if (key === checkedLetterArray[h].textContent) {
            disabledArray.push(key);
            return disabledArray;
        }
      }
  }

function getButton(key) {

for(var j = 0; j < checkedLetterArray.length; j++) {
        if (key === checkedLetterArray[j].textContent) {
        return thisLetter = checkedLetterArray[j];
      }
    }
}

//click button to hide display overlay, pick random phrase, and start game
startButton.addEventListener('click', function() {
  game = new Game();
  game.startGame();
});

//grab letter that has been clicked
for(var i = 0; i < checkedLetterArray.length; i++) {
      checkedLetterArray[i].addEventListener("click", function(e) {
      letter = e.target;
      disabledArray.push(letter.textContent);
      game.handleInteraction(letter);
  });
};

//grab letter from keypress input
//https://stackoverflow.com/questions/1846599/how-to-find-out-what-character-key-is-pressed

document.onkeyup = function(evt) {
    evt = evt || window.event;
if (disabledArray.includes(evt.key) === false){
    usedKeys(evt.key);
    console.log(disabledArray);
    getButton(evt.key);
    game.handleInteraction(thisLetter);
}
};
