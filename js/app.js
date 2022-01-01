// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
let firstColumnStore = 0;
let secondColumnStore = 0;
let thirdColumnStore = 0;
let fourthColumnStore = 0;
let fifthColumnStore = 0;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = 'This is the text string that you will generate with your script';
var speakButton = document.querySelector('button');
var noun = document.querySelector('Noun');

/* Arrays
-------------------------------------------------- */
let firstColumn = ["The turkey", "Mom", "Dad", "The dog", "My teacher", "The elephant", "The cat"];
let secondColumn = ["sat on", "ate", "danced with", "saw", "doesn't like", "kissed"];
let thirdColumn = ["a funny", "a scary", "a goofy", "a slimy", "a barking", "a fat"];
let fourthColumn = ["goat", "monkey", "fish", "cow", "frog", "bug", "worm"];
let fifthColumn = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass", "in my shoes"];


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}
/* From firstNounFun() to numofPlacesFun() are all the same with slight changes for each
	-The first line stores a random number value from a certain range of numbers
	-The second line inputs the random Number into the array number and then inputs it to the 'text'(h2) Element
	-The third line changes the background of the colour of the 'text'(h2) element
	-The fourth line runs the speakNow() with the array in the () so the text is narrated */
function firstNounFun() {
	firstColumnStore = Math.floor(Math.random() * 7);
    document.getElementById('text').textContent = firstColumn[firstColumnStore];
	document.getElementById("text").style.background = "purple";
	speakNow(firstColumn[firstColumnStore]);
}
function verbFun() {
	secondColumnStore = Math.floor(Math.random() * 6);
	document.getElementById('text').textContent = secondColumn[secondColumnStore];
	document.getElementById("text").style.background = "cyan";
	speakNow(secondColumn[secondColumnStore]);
}
function adjFun() {
	thirdColumnStore = Math.floor(Math.random() * 6);
	document.getElementById('text').textContent = thirdColumn[thirdColumnStore];
	document.getElementById("text").style.background = "yellowgreen";
	speakNow(thirdColumn[thirdColumnStore]);
}
function secondNounFun() {
	fourthColumnStore = Math.floor(Math.random() * 7);
	document.getElementById('text').textContent = fourthColumn[fourthColumnStore];
	document.getElementById("text").style.background = "orange";
	speakNow(fourthColumn[fourthColumnStore]);
}
function numOfPlacesFun() {
	fifthColumnStore = Math.floor(Math.random() * 6);
	document.getElementById('text').textContent = fifthColumn[fifthColumnStore];
	document.getElementById("text").style.background = "palevioletred";
	speakNow(fifthColumn[fifthColumnStore]);
}
// Random fun runs its own independent random values and inputs them into the array instead of the ones used when clicking each individually 
function randomFun() {
	let randomOne = Math.floor(Math.random() * 7);
	let randomTwo = Math.floor(Math.random() * 6);
	let randomThree = Math.floor(Math.random() * 6);
	let randomFour = Math.floor(Math.random() * 7);
	let randomFive = Math.floor(Math.random() * 6);
	document.getElementById("text").style.background = "red";
	document.getElementById('text').textContent = firstColumn[randomOne] + " " + secondColumn[randomTwo] + " " + thirdColumn[randomThree] + " " + fourthColumn[randomFour] + " " + fifthColumn[randomFive];
	speakNow(firstColumn[randomOne] + " " + secondColumn[randomTwo] + " " + thirdColumn[randomThree] + " " + fourthColumn[randomFour] + " " + fifthColumn[randomFive]);
}
// resets to deafult. Sets everthing to 0 and removes the text and colour
function resetFun() {
	firstColumnStore = 0;
	secondColumnStore = 0;
	thirdColumnStore = 0;
	fourthColumnStore = 0;
	fifthColumnStore = 0;
	document.getElementById('text').textContent = "";
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
document.getElementById("story").addEventListener("click", function() {
	textToSpeak = (firstColumn[firstColumnStore] + " " + secondColumn[secondColumnStore] + " " + thirdColumn[thirdColumnStore] + " " + fourthColumn[fourthColumnStore] + " " + fifthColumn[fifthColumnStore]);
	document.getElementById("text").style.background = "teal";
	document.getElementById('text').textContent = textToSpeak;
	speakNow(textToSpeak);
});
// when the button id is clicked it goes to each function depending on the id of the button.
document.getElementById("noun").addEventListener("click", function() {
	firstNounFun();
});
document.getElementById("verb").addEventListener("click", function() {
	verbFun();
});
document.getElementById("adj").addEventListener("click", function() {
	adjFun();
});
document.getElementById("nounTwo").addEventListener("click", function() {
	secondNounFun();
});
document.getElementById("numOfPlaces").addEventListener("click", function() {
	numOfPlacesFun();
});
document.getElementById("random").addEventListener("click", function() {
	randomFun();
});
document.getElementById("reset").addEventListener("click", function() {
	resetFun();
});
