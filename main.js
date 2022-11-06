window.addEventListener('load',init);
// Availbale Level
let levels ={
	easy:5,
	medium:3,
	hard:1
};

// To Change Level
let currentLevel = levels.easy;
// Globals
let time = currentLevel;
let score = 0;
let isPlaying;

// DOM Elements
let wordInput = document.querySelector('#word-input');
let currentWord = document.querySelector('#current-word');
let scoreDisplay = document.querySelector('#score');
let timeDisplay = document.querySelector('#time');
let message = document.querySelector('#message');
let seconds = document.querySelector('#seconds');

// Array of Words
let words = [
'hat',
'river',
'lucky',
'statue',
'stubborn',
'cocktail',
'runaway',
'joke',
'developer',
'establishment',
'hero',
'javascript',
'nutrition',
'revolver',
'echo',
'siblings',
'investigate',
'horrendous',
'symptom',
'laughter',
'magic',
'master',
'space',
'defintion',
'logic',
'perfect',
'similar',
'strong',
'smile',
'count',
'down',
'Showoff',
'string'
];

// Initialize Game
function init(){
	// Load word from array
	showWord(words);
	// Show number of seconds in UI
	seconds.innerHTML = currentLevel
	// Start matching on word input
	wordInput.addEventListener('input',startMatch);
	// Call countdown every second
	setInterval(countdown,1000);
	// Check game Status
	setInterval(checkStatus,50);
}

//Start Match
function startMatch(){
	if(matchWords()){
		isPlaying = true;
		time =currentLevel + 1;
		showWord(words);
		wordInput.value ='';
		score++;
	}
	scoreDisplay.innerHTML =score;
	// if score is -1 then display 0
	if(score === -1)
	{
		scoreDisplay.innerHTML =0;
	}
	else
	{
		scoreDisplay.innerHTML =score;
	}

}
// Match CurrentWord to wordInput
function matchWords(){
if(wordInput.value === currentWord.innerHTML){
		message.innerHTML = "Correct !!!";
		return true;	
		}
		else{
		message.innerHTML='';
		return false
		}
}
// Pick & show random word
function showWord(words){
	//Generate random array Index
	const randIndex = Math.floor(Math.random() * words.length); // Math.random gives the number between 0 to 1 min =0 max=1 and between like 0.99
	// Output random word
	currentWord.innerHTML = words[randIndex];
}

//Counterdown Timer
function countdown()
{
	// Make sure time is not run not
	if(time>0){
		// Decerement
	time--;
	}
	else if(time ==0)
		// Game is over
	isPlaying = false;

	timeDisplay.innerHTML = time;

}
// Check game Status
function checkStatus(){
	if(!isPlaying && time === 0){
		message.innerHTML="Game Over!!!";
		score=-1;
	}
}