//Start//
// var name = prompt("What is your name?");
// console.log("Hello" + name);


// Array of dog names //

let puppyArray = ["labrador retriever", "german shepherd", "poodle", "chihuahua",
  "golden retriever", "yorkie", "dachshund", "beagle", "boxer",
  "schnauzer", "shih tzu", "bulldog", "akita", "cocker spaniel", "st bernard",
  "bulldog", "pug", "rottweiler", "english setter", "maltese", "basset hound",
  "german shorthaired pointer", "weimaraner", "border collie",
  "shetland sheepdog", "dobermann", "chesapeake bay retriever", "bernese mountain",
  "great dane", "rhodesian ridgeback", "siberian husky", "australian shepherd", "corgi",
  "boston terrier", "pomeranian", "havanese", "english mastiff"];
console.log(puppyArray)

// picking a random dog//

let randomPuppy = puppyArray[Math.floor(Math.random() * puppyArray.length)];

 //document.guess.innerHTML = randomPuppy;

console.log(randomPuppy);


// display answerArray to randomPuppy //

var answerArray = [];
for (var i = 0; i < randomPuppy.length; i++) {
  answerArray[i] = "_";
}
console.log(answerArray);

var remainingLetters = randomPuppy.length;
while (remainingLetters > 0)
  for (var j = 0; j < randomPuppy.length; j++) {
    if (randomPuppy[j] === guess) {
      answerArray[j] = guess;
      remainingLetters--;
    }
  }
  console.log(remainingLetters);

// userGuess //
function userGuess() {
  var guess = document.getElementById(onkeyup).value;


  if (guess === userGuess) {}
}

function displayGuess() {

}

function reset() {

}

// Array of images? not sure if possible yet//

// var imageArray = [?]