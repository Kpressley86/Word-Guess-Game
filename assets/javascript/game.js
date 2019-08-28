// Array of dog names //

let puppyArray = ["golden retriever", "poodle", "chihuahua", "bulldog", "beagle",
  "maltese", "basset hound","yorkie", "dachshund", "german shepherd"];
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
let gold = document.getElementById("golden retiever");
let chi = document.getElementById("chihuahua");
let poodle = document.getElementById("poodle");
let beagle = document.getElementById("beagle");
let bullb = document.getElementById("bulldog");
let mal = document.getElementById("maltese");
let bassett = document.getElementById("basset hound");
let york = document.getElementById("yorkie");
let dach = document.getElementById("dachshund");
let germ = document.getElementById("german shepherd");


function aud() {
    // goldenRetriever //
    
    if (randomPuppy === puppyArray[0]) {
        chihuahua.pause();
        poodle.pause();
        beagle.pause();
        bulldog.pause();
        maltese.pause();
        "basset hound".pause();
        yorkie.pause();
        dachshund.pause();
        "german shepherd".pause();
        "golden retriever".play();
        document.getElementById("image").src = "./assets/images/golden.jpg";
    }
    // chihuahua //
    
    else if (randomPuppy === puppyArray[1]) {
        "golden retriever".pause();
        poodle.pause();
        beagle.pause();
        bulldog.pause();
        maltese.pause();
        "basset hound".pause();
        yorkie.pause();
        dachshund.pause();
        "german shepherd".pause();
        chihuahua.play();
        document.getElementById("image").src = "./assets/images/chihuahua.jpg";
    }
    // poodle //
    
    else if (randomPuppy === puppyArray[2]) {
        chihuahua.pause();
        "golden retriever".pause();
        beagle.pause();
        bulldog.pause();
        maltese.pause();
        "basset hound".pause();
        yorkie.pause();
        dachshund.pause();
        "german shepherd".pause();
        poodle.play();
        document.getElementById("image").src = "./assets/images/poodle.jpg";
    }
    // beagle //
    
    else if (randomPuppy === puppyArray[3]) {
        chihuahua.pause();
        poodle.pause();
        "golden retriever".pause();
        bulldog.pause();
        maltese.pause();
        "basset hound".pause();
        yorkie.pause();
        dachshund.pause();
        "german shepherd".pause();
        beagle.play();
        document.getElementById("image").src = "./assets/images/beagle.jpg";
    }
    // bulldog //
   
    else if (randomPuppy === puppyArray[4]) {
        chihuahua.pause();
        poodle.pause();
        beagle.pause();
        "golden retriever".pause();
        maltese.pause();
        "basset hound".pause();
        yorkie.pause();
        dachshund.pause();
        "german shepherd".pause();
        bulldog.play();
        document.getElementById("image").src = "./assets/images/bulldog.jpg";
    }
    // maltese //
    
    else if (randomPuppy === puppyArray[5]) {
        chihuahua.pause();
        poodle.pause();
        beagle.pause();
        bulldog.pause();
        "golden retriever".pause();
        "basset hound".pause();
        yorkie.pause();
        dachshund.pause();
        "german shepherd".pause();
        maltese.play();
        document.getElementById("image").src = "./assets/images/maltese.jpg";
    }
    // basset hound //
    
    else if (randomPuppy === puppyArray[6]) {
        chihuahua.pause();
        poodle.pause();
        beagle.pause();
        bulldog.pause();
        maltese.pause();
        "golden retriever".pause();
        yorkie.pause();
        dachshund.pause();
        "german shepherd".pause();
        "basset hound".play();
        document.getElementById("image").src = "./assets/images/basset-hound.jpg";
    }
    // yorkie //

    else if (randomPuppy === puppyArray[7]) {
        chihuahua.pause();
        poodle.pause();
        beagle.pause();
        bulldog.pause();
        maltese.pause();
        "basset hound".pause();
        "golden retriever".pause();
        dachshund.pause();
        "german shepherd".pause();
        yorkie.play();
        document.getElementById("image").src = "./assets/images/yorkie.jpg";
    }
    // dachshund //

    else if (randomPuppy === puppyArray[8]) {
        chihuahua.pause();
        poodle.pause();
        beagle.pause();
        bulldog.pause();
        maltese.pause();
        "basset hound".pause();
        yorkie.pause();
        "golden retriever".pause();
        "german shepherd".pause();
        dachshund.play();
        document.getElementById("image").src = "./assets/images/dachshund.jpg";
    }
    // german shepherd //

    else if (randomPuppy === puppyArray[9]) {
        chihuahua.pause();
        poodle.pause();
        beagle.pause();
        bulldog.pause();
        maltese.pause();
        "basset hound".pause();
        yorkie.pause();
        dachshund.pause();
        "golden retriever".pause();
        "german shepherd".play();
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
