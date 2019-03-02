/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
   constructor(phrase) {
       this.phrase = phrase.toLowerCase();
   }

   addPhraseToDisplay(phrase) {
  //attach li items to ul
      const phraseDiv = document.querySelector('ul');

  //create li for each character in the given phrase
      for (let i = 0; i < (this.phrase).length; i++ ) {

      const phraseLetter = document.createElement('li');
      phraseDiv.appendChild(phraseLetter);
      let text = document.createTextNode(this.phrase[i]);
      phraseLetter.appendChild(text)

      if (this.phrase[i] === ' ') {
          phraseLetter.className = 'space';
        } else {
          phraseLetter.className = 'hide letter ' + this.phrase[i];
        }
      }
}

//Checks to see if a letter is in a phrase
  checkLetter(letter) {
    //grab all letters in the activePhrase and put them in an phraseArray
    let activeArray = [];
    for (let j = 0; j < (this.phrase).length; j++) {
      activeArray.push((this.phrase)[j]);
    }

    //see if letter in question is included in the phraseArray
    let letterIncluded = activeArray.includes(letter);
    if (letterIncluded === true) {
      return true;
    } else {
      return false;
    }
  };

  showMatchedLetter(letter) {
    let matchedLetter = document.getElementsByClassName(letter);
    for(let k = 0; k < matchedLetter.length; k++) {
      matchedLetter[k].className = 'show letter ' + letter;
    }
};

};
