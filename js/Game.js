/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
   constructor() {
     this.missed = 0;
     this.phrases = this.createPhrase();
     this.activePhrase = null;
   }

//creates an array of possible phrases
createPhrase() {
    const originalPhraseArray = [
       'Read between the lines',
       'Its kind of fun to do the impossible',
       'In kindness there is strength',
       'Practice Aloha',
       'I am still learning'
     ];
     const newPhraseArray = [];
     originalPhraseArray.forEach( function(element) {
        let item = new Phrase(element);
        newPhraseArray.push(item);
     });
     return newPhraseArray;
   }

//pulls random phrases from createPhrase()
getRandomPhrase() {
    const phraseArray = this.phrases;
    let phrase = phraseArray[Math.floor(Math.random()*phraseArray.length)];
    return phrase;
}

startGame() {
//Hide stat screen overlay
    document.getElementById('overlay').style.display = 'none';
//call the getRandomPhrase() method
    const randomPhrase = this.getRandomPhrase();
    this.activePhrase = randomPhrase;
//call the addPhraseToDisplay() method
    this.activePhrase.addPhraseToDisplay();
}

checkForWin() {
//how many letters still have the class name 'hide letter'
    let hiddenLetters = document.getElementsByClassName('hide letter');
    if (hiddenLetters.length !== 0) {
      return false;
    } else {
      return true;
    }
}

removeLife() {
    const lives = document.getElementsByClassName('tries');
//replace image
    lives[(this.missed)].firstChild.src = 'images/lostHeart.png';
//increase missed property by 1
    (this.missed) += 1;
//game over if out of hearts
    if (this.missed === 5) {
      this.gameOver();
    }
}

gameOver() {
//back to start up screen
   document.getElementById('overlay').style.display = '';
//this player loses game or wins
  if (this.missed > 4) {
    document.getElementById('overlay').className = 'lose';
    document.getElementById('game-over-message').innerHTML = 'Sorry! Better Luck Next Time.'
  } else {
    document.getElementById('overlay').className = 'win';
    document.getElementById('game-over-message').innerHTML = 'Congratulations! You guessed the phrase!'
  }

//After winning or losing the game reset the game
//Remove all `li` elements from the Phrase `ul` element.
//https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
  const phraseDiv = document.querySelector('ul');
  const liItems = phraseDiv.getElementsByTagName('li');
  while (phraseDiv.firstChild) {
    phraseDiv.removeChild(phraseDiv.firstChild);
}

//Enable all of the onscreen keyboard buttons and update each to use the `key` CSS class
  const keys = document.getElementById('qwerty').querySelectorAll('button');
  for (let r = 0; r < keys.length; r++) {
    keys[r].className = 'key';
    keys[r].disabled = false;
};

//Reset all of the heart images
  const lives = document.getElementsByClassName('tries');
  for (let m = 0; m < lives.length; m++) {
    lives[m].firstChild.src = 'images/liveHeart.png';
  }

//reset keyup array
  disabledArray = [];   
}

handleInteraction(button){
  //Disable the selected letter’s onscreen keyboard button
  button.disabled = 'true';
  //If incorrect letter is chosen add CSS class 'wrong'
  //Call removeLife()
  let clickedLetter = button.textContent;
  let clickedLetterResult = this.activePhrase.checkLetter(clickedLetter);
  if (clickedLetterResult === false) {
    button.className = 'wrong';
    this.removeLife();
  } else {
  //If correct add CSS class 'chosen'
  //call showMatchedLetter
    button.className = 'chosen';
    this.activePhrase.showMatchedLetter(clickedLetter);
  }

// check for win
// if all letters are shown call gameOver();
  let winner = this.checkForWin();
  if (winner === true) {
    this.gameOver();
  }
}


};
