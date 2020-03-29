const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startBtn = document.querySelector('.btn__reset');
const phrases = ['dog', 'cat', 'bird', 'fish', 'tiger'];
let missed = 0; //collect missed guesses


let randPhrases = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(randPhrases);

/*****************Functions***************** */

//set the overlay display property to none when the btn is clicked
function hideOverlay() {
    //grab the overlay div
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'none';
   
}

function getRandomPhraseAsArray(arr) {
    //get a random index from the array and split it into a new array
    return arr[Math.floor(Math.random() * arr.length)].split(',');
}

function addPhraseToDisplay(arr) {

    arr.forEach((element) => {
        let ul = document.querySelector('#phrase ul');
        let li  = document.createElement('li');
        //put the phrase inside the li
        li.innerText = element;
        //attach the li to its parent ul
        ul.appendChild(li);
        
    });
}



/*******************EventListenrs*************** */
startBtn.addEventListener('click', hideOverlay);