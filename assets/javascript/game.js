//Start//
var name = prompt("What is your name?");
console.log("Hello" + name);

var randomPuppy = getRandomPuppy();

// FUNCTIONS //

function getRandomPuppy() {
  var puppyArray = puppyArray[Math.floor(Math.random() * puppyArray.length)];
}

function userGuess () {

}

function displayGuess () {

}

function reset() {

}

// Array of dog names //

var puppyArray = [ "labrador retriever", "german shepherd", "poodle", "chihuahua", 
"golden retriever", "yorkie", "dachshund", "beagle", "boxer", 
"schnauzer", "shih tzu", "bulldog", "akita", "cocker spaniel", "st bernard", 
"bulldog", "pug", "rottweiler", "english setter", "maltese", "basset hound", 
"german shorthaired pointer", "weimaraner", "border collie",
"shetland sheepdog", "dobermann", "chesapeake bay retriever", "bernese mountain", 
"great dane", "rhodesian ridgeback", "siberian husky", "australian shepherd", "corgi", 
"boston terrier", "pomeranian", "havanese", "english mastiff" ]''
console.log(puppyArray);

// FUNCTIONS //

// picking a random dog//
function getRandomPuppy() {
  var puppyArray = puppyArray[Math.floor(Math.random() * puppyArray.length)];
}

// Array for each name!//
var answerArray = ["_","_"];
u for (var i = 0; i < puppyArray.length; i++) {
 answerArray[i] = "_";
}
var remainingLetters = puppyArray.length;


// Array of images? not sure if possible yet//

var imageArray = [?]

// If Else Example //

if (true) {
    alert("goo goo dolls");
  }
  else {
    alert("vanilla ice");
  }

  if (false) {
    alert("the neighborhood");
  }
  else {
    alert("one direction");
  }

  if (("5" + "5") === "55") {
    alert("tofu");
  }
  else {
    alert("soybean");
  }


// Console loggs //

console.log (puppyArray)

// This is a LOOP //
// for (var i= 0; 1 < puppyArray.length; i++) //