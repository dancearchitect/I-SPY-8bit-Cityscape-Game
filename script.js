//GAME ------------------------------------------------------------

//create a variable with the value of an array of objects of I Spy phrases and images
let itemArray = [
	{phrase:`something fluffy with claws.`, img: 'cat.png'},
	{phrase:`somethin- AHHH I'M BEING ABDUCTED!!!!`, img: 'sci-fi.png'},
	{phrase:`something 3D OOOOOOOOOOOOO AAHHHH`, img: '3d-glasses.png'},
	{phrase:`something filled with honey mmm...`, img: 'hornet-hive.png'},
	{phrase:`something... BBBRRRAAAIIINNNNSSZZZ`, img: 'zombie.png'},
	{phrase:`something very, very spoopy ooOOOoOOoOoo.`, img: 'ghost.png'},
	{phrase:`something good for vampires, bad for breath.`, img: 'garlic.png'},
	{phrase:`something no one ever pays attention to.`, img: 'stop-sign.png'},
	{phrase:`something full of fire in the sky! Very safe.`, img: 'hot-air-balloon.png'}
];

//set up variables in global scope

//set variable to have no value
let randomIndex = null;
//set variable to empty, or undefined, value
let randomObject;


function playGame() {
	//select the background image container
	const cityDiv = document.querySelector('.cityscape');

	//create variables assigned to arrays
	const gridClass = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'];
	const imageClass = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];

	//loop through first container class based on array length
	for (let i = 0; i < gridClass.length; i++) {
		//create variable and create a div
		const gridAreaDivs = document.createElement('div');
		//assigns the gridClass array as a class to the divs
		gridAreaDivs.className = `${gridClass[i]}`;

		//create variable and create a div named img
		const itemImg = document.createElement('img');
		//assigns the imageClass array as a class to the div
		itemImg.classList.add(`${imageClass[i]}`);
		//sets a source attribute to the img div based on the specified array object
		itemImg.setAttribute('src', itemArray[i].img);
		//sets a name attribute called clickable to the img div
		itemImg.setAttribute('name', 'clickable');
		//sets an id attribute to the img div based on the specified array object
		itemImg.setAttribute('id', itemArray[i].img);

		//adds the itemImg div class to the gridAreaDivs div
		gridAreaDivs.appendChild(itemImg);
		//adds the gridAreaDivs div class to the cityscape div
		cityDiv.appendChild(gridAreaDivs);
	}

	//makes items clickable and use evt function run function
	cityDiv.addEventListener('click', (evt) => {
		//strict condition that targets the name of the item array
		//and the objects with the name clickable
		if (evt.target.name === 'clickable') {
			//strict condition that targets the first attribute value
			//and compares to the image clicked
			if(evt.target.attributes[1].value === randomObject.img){
				//if the above conditions are true stop displaying the item clicked
				evt.target.style.display = 'none';

				//filter through the array for its objects
			  itemArray = itemArray.filter((obj)=>{
					//if the object image does not match the id, return
					return obj.img != evt.target.id;
				})
				//condition pertaining to the array length
				if(itemArray.length){
					//call function if condition is met
				  shuffleArray();
				} else {
					//check if game is complete
					endGame();
				}
			}
		}
	});
	shuffleArray();
};


function shuffleArray() {
	//sets variable with the value of a random number up to the length of the array
	randomIndex = Math.floor(Math.random() * itemArray.length);
	//sets variable to the array by its index
  randomObject = itemArray[randomIndex];

	//creates variable and assigns the array's index phrase
	let text = randomObject.phrase;
	//creates variable and assigns the new-phrase div grabbed from the HTML
	let newphrase = document.getElementById('new-phrase');
	//creates variable and assigns the array's index image
	let img = randomObject.img;


	//give the newphrase variable text content
	//value is the string plus the array phrase
	newphrase.textContent = `I spy... ${text}`;

};


function endGame() {
	//switches 8bit image
	fadeImg();
	//creates pop up
		alert('Good job!');
};

function restartGame() {
	//reload page when button is clicked
	{window.location.reload();}
}

// CLOCK ------------------------------------------------------------

//creates variable and gives value of clock div
const timer = document.getElementById('clock');
//creates variable and gives value of button div
const button = document.getElementsByTagName('button')[0];

//creates variable and gives value of time in seconds
let time = 60;
//creates variable and gives value of false
let start = false;

//converts time numeral to a string with the value of a function
timer.innerHTML = prettyTime();

function startGame() {
	//condition of if start is not false, or true
	if (!start) {
		//creates variable with the value of a function set to a fixed time delay
		const interval = setInterval(function(){
			//subtract one from time
			time = time - 1;
			//reiterate number to string conversion
			timer.innerHTML = prettyTime();
			//condition of if no time, or time is 0
			if(!time) {
				//removes the interval function and stops clock
				clearInterval(interval);
				//creates pop up
				alert('Out of time! Try again!');
				//reload page when alert is clicked
				{window.location.reload();}
			}
			//sets delay of interval in milliseconds
		}, 1000);
		//call function to start game
		playGame();
		showImage();
		//starts timer
		start = true;
	}
};

function prettyTime() {
	//creates variable and gives value of seconds divided by 60
	let minutes = Math.floor(time / 60);
	//creates variable and gives value of function with argument
	//of minutes executed by function called
	let minutesString = normalizeString(minutes.toString());

	//creates variable and gives value of seconds multiplied by 60
	let seconds = time - minutes * 60;
	//creates variable and gives value of function with argument
	//of seconds excuted by function called
	let secondsString = normalizeString(seconds.toString());

	//returns variables to function
	return minutesString + ":" + secondsString;
};

//converts numbers to string
function normalizeString(string) {
	//condition of if string length is less than two characters
	if(string.length < 2) {
		//add 0 to string
		string = "0" + string;
	}
	if(string.length < 2) {
		string = "0" + string;
	}
	//returns string to function
	return string;
};

//HIDE AND SHOW IMAGE ----------------------------------------------
function showImage(){
	//gets the id of the image and displays it as visible
	//this method won't effect the document layout
		document.getElementById('show-image').style.visibility='visible';
}

function fadeImg() {
	//gets the id of the bottom image and displays as visible
	document.getElementById('hidden-img').style.visibility='visible';
	//gets the id of the top image and displays as hidden
	document.getElementById('show-image').style.visibility='hidden';
		};
