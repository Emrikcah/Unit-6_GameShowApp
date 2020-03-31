const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startBtn = document.querySelector('.btn__reset');
const removeImg = document.querySelectorAll('.tries');
const parentOL = document.querySelector('#scoreboard ol');
const phrases = ['dog gone', 'cat wild', 'bird of prey', 'fish head', 'tiger and po'];
let missed = 0;



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


function checkLetter(btn) {

    const letter = document.querySelectorAll('.letter');
    let match = null;

    for (const i of letter) {

        if (i.textContent === btn.textContent) {
            match = i;
            match.classList.add('show');
            btn.classList.add('chosen');
            btn.disabled = true;
            // break skip;
           
        }
        else if(i.textContent !== btn.textContent){
            btn.style.opacity ='0.5';
             btn.disabled = true;
        }
    }
    
    return match;
}

function newFunction(e) {
    const btn = e.target
    //run only if the user clicks a button
    if (e.target.tagName == 'BUTTON') {
        let letterFound = checkLetter(btn);
        if (letterFound === null) {
            parentOL.removeChild(removeImg[missed]);
            missed++;
        }

    }

}

/*******************EventListenrs*************** */
startBtn.addEventListener('click', hideOverlay);
qwerty.addEventListener('click', newFunction);