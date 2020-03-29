const qwerty = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const startBtn = document.querySelector('.btn__reset');
const phrases = ['dog', 'cat', 'bird', 'fish', 'tiger'];
let missed = 0;//collect missed guesses


let x = getRandomPhraseAsArray(phrases);
console.log(x);





//functions
function hideOverlay() {
    //grab the overlay div
    const overlay = document.querySelector('#overlay'); 
    //remove the start class
    overlay.classList.remove('start'); 
}

function getRandomPhraseAsArray(arr) {
    //get a random index from the array and split it into a new array
    return arr[Math.floor(Math.random() * arr.length)].split(',');
}

function addPhraseToDisplay(arr){
    
}



//eventlisteners
//remove the start class when the btn is clicked
startBtn.addEventListener('click', hideOverlay); 