const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startBtn = document.querySelector('.btn__reset');
const removeImg = document.querySelectorAll('.tries');
const parentOL = document.querySelector('#scoreboard ol');
const title = document.querySelector('.title');
let missed = 0;
const phrases = ['I Gamon will save us', 'Azeroth must not fall', 'Lord Illidan knows the way', 'May your blades never dull', 'Go with honor'];

let randPhrases = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(randPhrases);


/*****************Functions***************** */

//set the overlay display property to none when the btn is clicked
function hideOverlay() {
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
}

//get a random index from the array and split it into a new array
function getRandomPhraseAsArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)].split('');
}

function addPhraseToDisplay(arr) {
    let ul = document.querySelector('#phrase ul');
    arr.forEach((element) => {
        //create an li
        let li = document.createElement('li');
        //put the phrase inside the li
        li.innerText = element;
        //check if there is a space in the phrase
        if (element === ' ') {
            //add a class to the li
            li.classList.add('space');
        } else {
            li.classList.add('letter');
        }
        //attach the li to its parent ul
        ul.appendChild(li);
    });
}

//check for a match and return 
function checkLetter(btn) {

    const letter = document.querySelectorAll('.letter');
    let match = null;

    for (const i of letter) {
        let phraseLetter = i.textContent.toLowerCase();
        let keyboardPress = btn.textContent.toLowerCase();

        if (phraseLetter === keyboardPress) {
            match = i;
            match.classList.add('show');
            btn.classList.add('chosen');
            btn.disabled = true;
        }
    }
    return match;
}

//remove the hearts if the user guesses incorrectly
function checkMissed(e) {
    const btn = e.target

    if (btn.tagName == 'BUTTON') {

        let letterFound = checkLetter(btn);
        if (letterFound === null) {
            // btn.classList.add('opacity');
            // btn.style.opacity = '0.5';
            btn.classList.add('wrongGuess');
            btn.disabled = true;
            parentOL.removeChild(removeImg[missed]);
            missed++;
        }
    }
    checkWin();
}

//check if the user wins or loses
function checkWin() {
    const letter = document.querySelectorAll('.letter');
    const show = document.querySelectorAll('.show');

    if (letter.length === show.length) {
        // btn.style.opacity = '0.0';
        overlay.classList.add('win');
        overlay.style.display = 'flex';
        title.textContent = 'Victory';

    } else if (missed >= 5) {
        overlay.style.display = 'flex';
        title.textContent = 'Try Again';
        overlay.classList.add('lose');
    }
}


/*******************EventListenrs*************** */
startBtn.addEventListener('click', hideOverlay);
qwerty.addEventListener('click', checkMissed);