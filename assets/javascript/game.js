// Array of dog names //

let puppyArray = ["golden_retriever", "poodle", "chihuahua", "bulldog", "beagle",
    "maltese", "basset_hound", "yorkie", "dachshund", "german_shepherd",
    "schnauzer", "shih_tzu", "akita", "cocker_spaniel", "st_bernard",
    "pug", "rottweiler", "english_setter", "boxer",
    "german_shorthaired_pointer", "weimaraner", "border_collie",
    "shetland_sheepdog", "dobermann", "chesapeake_retriever", "bernese_mountain",
    "great_dane", "rhodesian_ridgeback", "siberian_husky", "australian_shepherd", "corgi",
    "boston_terrier", "pomeranian", "havanese", "english_mastiff", "labrador_retriever"];


// VARRIABLES //

let randomPuppy = "";
let lettersOfWord = []
let empty = 0;
let fillEmpty = [];
let wrongGuess = [];
let wins = 0;
let losses = 0;
let numberOfGuesses = 10;

//GAME START FUNCTION

function Game() {

    randomPuppy = puppyArray[Math.floor(Math.random() * puppyArray.length)];

    lettersOfWord = randomPuppy.split("");

    empty = lettersOfWord.length;

    // loop for empty spaces //
    for (var i = 0; i < empty; i++) {
        fillEmpty.push("_");
    }

    //showing the "_" within HTML //
    document.getElementById("currentword").innerHTML = "  " + fillEmpty.join("  ");

    // console loggs //
    console.log(puppyArray)
    console.log(randomPuppy)
    console.log(lettersOfWord)
    console.log(empty)
    console.log(fillEmpty)
}


// AUDIO ??? ///

// variables for audio function //
let correctG = new Audio("./assets/audio/99 - Bark! (SFX).mp3");
let wrongG = new Audio("./assets/audio/99 - Laugh (SFX).mp3");

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
    // schnauzer //

    else if (randomPuppy === puppyArray[10]) {

        document.getElementById("image").src = "./assets/images/min-schnauzer.jpg";
    }
     // shih_tzu //

     else if (randomPuppy === puppyArray[11]) {

        document.getElementById("image").src = "./assets/images/shih-tzu.jpg";
    }
     // akita //

     else if (randomPuppy === puppyArray[12]) {

        document.getElementById("image").src = "./assets/images/akita.jpg";
    }
     // cocker_spaniel //

     else if (randomPuppy === puppyArray[13]) {

        document.getElementById("image").src = "./assets/images/cock-span.jpg";
    }
     // st_bernard //

     else if (randomPuppy === puppyArray[14]) {

        document.getElementById("image").src = "./assets/images/eng-setter.jpg";
    }
     // pug //

     else if (randomPuppy === puppyArray[15]) {

        document.getElementById("image").src = "./assets/images/pug.jpg";
    }
     // rottweiler //

     else if (randomPuppy === puppyArray[16]) {

        document.getElementById("image").src = "./assets/images/rottweiler.jpg";
    }
     // english_setter //

     else if (randomPuppy === puppyArray[17]) {

        document.getElementById("image").src = "./assets/images/eng-setter.jpg";
    }
     //  boxer //

     else if (randomPuppy === puppyArray[18]) {

        document.getElementById("image").src = "./assets/images/boxer.jpg";
    }
     // german_shorthaired_pointer //

     else if (randomPuppy === puppyArray[19]) {

        document.getElementById("image").src = "./assets/images/germ-shep.jpg";
    }
     //  weimaraner //

     else if (randomPuppy === puppyArray[20]) {

        document.getElementById("image").src = "./assets/images/weimaraner.jpg";
    }
    //  border_collie //

    else if (randomPuppy === puppyArray[21]) {

        document.getElementById("image").src = "./assets/images/border-collie.jpg";
    }
    //  shetland_sheepdog //

    else if (randomPuppy === puppyArray[22]) {

        document.getElementById("image").src = "./assets/images/shetland.jpg";
    }
    //  dobermann //

    else if (randomPuppy === puppyArray[23]) {

        document.getElementById("image").src = "./assets/images/doberman.jpg";
    }
    //  chesapeake_retriever //

    else if (randomPuppy === puppyArray[24]) {

        document.getElementById("image").src = "./assets/images/chesapeake_bay_retriever.png";
    }
    //  bernese_mountain //

    else if (randomPuppy === puppyArray[25]) {

        document.getElementById("image").src = "./assets/images/bernese-mountain-dog.jpg";
    }
    //  great_dane //

    else if (randomPuppy === puppyArray[26]) {

        document.getElementById("image").src = "./assets/images/great-dane.jpg";
    }
    //  rhodesian_ridgeback //

    else if (randomPuppy === puppyArray[27]) {

        document.getElementById("image").src = "./assets/images/rhodesian-ridgeback.jpg";
    }
    //  siberian_husky //

    else if (randomPuppy === puppyArray[28]) {

        document.getElementById("image").src = "./assets/images/siberian-husky.jpg";
    }
    //  australian_shepherd //

    else if (randomPuppy === puppyArray[29]) {

        document.getElementById("image").src = "./assets/images/australian-shepherd.jpg";
    }
    //  corgi //

    else if (randomPuppy === puppyArray[30]) {

        document.getElementById("image").src = "./assets/images/corgi.jpg";
    }
    //  boston_terrier //

    else if (randomPuppy === puppyArray[31]) {

        document.getElementById("image").src = "./assets/images/boston-terrier.jpg";
    }
    //  pomeranian //

    else if (randomPuppy === puppyArray[32]) {

        document.getElementById("image").src = "./assets/images/pomeranian.jpg";
    }
    //  havanese //

    else if (randomPuppy === puppyArray[33]) {

        document.getElementById("image").src = "./assets/images/havanese.jpg";
    }
    //  english_mastiff //

    else if (randomPuppy === puppyArray[34]) {

        document.getElementById("image").src = "./assets/images/english-mastiff.jpg";
    }
    //  labrador_retriever //

    else if (randomPuppy === puppyArray[35]) {

        document.getElementById("image").src = "./assets/images/lab-retriever-puppy.jpg";
    }
};


// RESET //

function reset() {
    numberOfGuesses = 10;
    wrongGuess = [];
    fillEmpty = [];
    Game();
}


// Cchecking guess //


function checkLetters(letter) {
    var letters = false;

    for (var i = 0; i < empty; i++) {
        if (randomPuppy[i] == letter) {
            letters = true;
        }
    }

    if (letters) {

        for (var i = 0; i < empty; i++) {
            if (randomPuppy[i] == letter) {
                fillEmpty[i] = letter;
            }
        }
    }

    else {
        wrongGuess.push(letter);
        numberOfGuesses--;
    }
    console.log(fillEmpty);
}


// WIN or LOSE //


function complete() {
    console.log("wins:" + wins + "| losses:" + losses + "| remaining guesses:" + numberOfGuesses)

    // WIN //
    if (lettersOfWord.toString() == fillEmpty.toString()) {
        wins++;
        aud("correct")
        reset()

        document.getElementById("winstracker").innerHTML = " " + wins;

        // LOSE //
    } else if (numberOfGuesses === 0) {
        losses++;
        aud("wrong")
        reset()
        document.getElementById("image").src = "./assets/images/duckHunt.gif"
        document.getElementById("losstracker").innerHTML = " " + losses;
    }

    document.getElementById("currentword").innerHTML = "  " + fillEmpty.join(" ");
    document.getElementById("guessesremaining").innerHTML = " " + numberOfGuesses;
}


// Game keyup funtion //

Game()


document.onkeyup = function (event) {
    let guesses = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(guesses);

    complete();

    document.getElementById("playerguesses").innerHTML = "  " + wrongGuess.join(" ");

    console.log(guesses);
}
