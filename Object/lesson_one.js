//object literal to define a 'Player' object
const player = {
	name : "Ahmad Alif",
	"position" : "Defender",
	"stuff" : function(){
		//do stuff
	}
}

/***2 ways to fetch object properties***/

//dot notation
player.name; // value = Ahmad Alif

//braket notation
player["stuff"]; //[function]

/**********************************/

/** Callback variable example*/
const variable = 'name'; //example variable

player.variable; //this return 'undefined' because its looking for a property name 'variable' which does not exist

player[variable]; // this return 'Ahmad Alif' as it is equalvalent to player['name']

/*****************************************/


/****OBJECT AS DESIGN PATTERN ***********************/

//example one
const playerOneName = "Tim";
const playerTwoName = "Jim";
const playerThreeName = "Jen";
const playerOneMarker = "X";
const playerTwoMarker = "O";

//example two
const playerOne = {
	name:"Tim",
	marker:"X"
};

const playerTwo = {
	name: "Jim",
	marker:"O"
};

//function to print out player's name to console
function printName(player){
	console.log(player.name);
}

function gameOver(winningPlayer){
	
}

//callback function
printName(player);

/*********************LESSON END HERE********************************* */
