// Array of dog names //

let puppyArray = ["golden_retriever", "poodle", "chihuahua", "bulldog", "beagle",
  "maltese", "basset_hound","yorkie", "dachshund", "german_shepherd"];
//   "schnauzer", "shih tzu", "akita", "cocker spaniel", "st bernard",
//   "pug", "rottweiler", "english setter", "boxer", 
//   "german shorthaired pointer", "weimaraner", "border collie",
//   "shetland sheepdog", "dobermann", "chesapeake bay retriever", "bernese mountain",
//   "great dane", "rhodesian ridgeback", "siberian husky", "australian shepherd", "corgi",
//   "boston terrier", "pomeranian", "havanese", "english mastiff", "labrador retriever"


// ALL VARRIABLES //

let randomPuppy = "";
let lettersOfWord = []
let blanks = 0;
let blanksAndCorrect = [];
let wrongGuess = [];
let wins = 0;
let losses = 0;
let guessesRemaining = 10;

//GAME START FUNCTION

function Game() {
    
    randomPuppy = puppyArray[Math.floor(Math.random() * puppyArray.length)];

    lettersOfWord = randomPuppy.split("");

    blanks = lettersOfWord.length;

    // loop for "_" spaces //
    for (var i = 0; i < blanks; i++) {
        blanksAndCorrect.push("_");
    }

    //showing the "_" within HTML //
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join("  ");

    // console loggs //
    console.log(puppyArray)
    console.log(randomPuppy)
    console.log(lettersOfWord)
    console.log(blanks)
    console.log(blanksAndCorrect)
}


//AUDIO FUNCTION


//variables for audio function
let correctG = document.getElementById("correct");
let wrongG = document.getElementById("wrong");



function aud() {
    // goldenRetriever //
    
    if (randomPuppy === puppyArray[0]) {
    
        document.getElementById("image").src = "./assets/images/golden.jpg";
    }
    // chihuahua //
    
    else if (randomPuppy === puppyArray[1]) {
      
        document.getElementById("image").src = "./assets/images/chihuahua.jpg";
    }
    // poodle //
    
    else if (randomPuppy === puppyArray[2]) {
        
        document.getElementById("image").src = "./assets/images/poodle.jpg";
    }
    // beagle //
    
    else if (randomPuppy === puppyArray[3]) {
       
        document.getElementById("image").src = "./assets/images/beagle.jpg";
    }
    // bulldog //
   
    else if (randomPuppy === puppyArray[4]) {
        
        document.getElementById("image").src = "./assets/images/bulldog.jpg";
    }
    // maltese //
    
    else if (randomPuppy === puppyArray[5]) {
        
        document.getElementById("image").src = "./assets/images/maltese.jpg";
    }
    // basset hound //
    
    else if (randomPuppy === puppyArray[6]) {
       
        document.getElementById("image").src = "./assets/images/basset-hound.jpg";
    }
    // yorkie //

    else if (randomPuppy === puppyArray[7]) {
       
        document.getElementById("image").src = "./assets/images/yorkie.jpg";
    }
    // dachshund //

    else if (randomPuppy === puppyArray[8]) {
      
        document.getElementById("image").src = "./assets/images/dachshund.jpg";
    }
    // german shepherd //

    else if (randomPuppy === puppyArray[9]) {
       
        document.getElementById("image").src = "./assets/images/germ-shep.jpg";
    }
};


// RESET //

function reset() {
    guessesRemaining = 10;
    wrongGuess = [];
    blanksAndCorrect = [];
    Game();
}


// Functin for checking guess //


function checkLetters(letter) {
    var letterInWord = false;
    
    for (var i = 0; i < blanks; i++) {
        if (randomPuppy[i] == letter) {
            letterInWord = true;
        }
    }
    
    if (letterInWord) {
        
        for (var i = 0; i < blanks; i++) {
            if (randomPuppy[i] == letter) {
                blanksAndCorrect[i] = letter;
            }
        }
    }
    
    else {
        wrongGuess.push(letter);
        guessesRemaining--;
    }
    console.log(blanksAndCorrect);
}


// WIN or LOSE funtion //


function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| guesses left:" + guessesRemaining)

    //if WON...then alert, play audio, display image and reset new round
    if (lettersOfWord.toString() == blanksAndCorrect.toString()) {
        wins++;
        aud()
        reset()
       
        document.getElementById("winstracker").innerHTML = " " + wins;

        //if LOST...then alert and reset new round
    } else if (guessesRemaining === 0) {
        losses++;
        reset()
        document.getElementById("image").src = "./assets/images/duckHunt.gif"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }
    
    document.getElementById("currentword").innerHTML = "  " + blanksAndCorrect.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + guessesRemaining;
}


// Start game funtion //

Game()


document.onkeyup = function (event) {
    let guesses = String.fromCharCode(event.keyCode).toLowerCase();
    
    checkLetters(guesses);
   
    complete();

    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");

    console.log(guesses);
}
