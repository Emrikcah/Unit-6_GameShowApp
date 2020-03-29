const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startBtn = document.querySelector('.btn__reset');
const phrases = ['dog gone', 'cat wild', 'bird of prey', 'fish monger', 'tiger and po'];
let missed = 0; //collect missed guesses


let randPhrases = getRandomPhraseAsArray(phrases);
console.log(randPhrases);

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
        if (element === ' ') {
            let li = document.createElement('li'); //create an li
            li.classList.add('space'); //add a class to the li
            li.innerText = element; //put the phrase inside the li
            ul.appendChild(li); //attach the li to its parent ul
        } else {
            let li = document.createElement('li');
            li.classList.add('letter');
            li.innerText = element;
            ul.appendChild(li);
        }
    });
}

function checkLetter() {

}



/*******************EventListenrs*************** */
startBtn.addEventListener('click', hideOverlay);