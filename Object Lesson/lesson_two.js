/**Object Constructor
 * 
 * When you have a specific type of object to duplicate like our player or inventory items
 * It is better to use object constructor to create the instance of the object
 */

/**Set up function constructor***/
function Player(name, marker){
	this.name = name;
	this.marker = marker;
	this.sayName = function(){
		console.log(this.name);
	}
}

/** Call the function constructor***/

const player1 = new Player('steve','x');
const player2 = new Player('alex','o');

player1.sayName();//steve
player2.sayName();//alex

/*********************LESSON END HERE********************************* */



Object.getPrototypeOf(player1) === Player.prototype; // returns true
Object.getPrototypeOf(player2) === Player.prototype; // returns true

Player.prototype.sayHello = function(){
	console.log("Hello! Im a player");
}

player1.sayHello();
player2.sayHello();

Object.getPrototypeOf(Player.prototype) === Object.prototype; // true

//Output may slightly differ based on the browser
player1.valueOf(); // Output: Object { name: "steve", marker: "X", sayName: sayName() }

player1.hasOwnProperty('valueOf') //false
Object.prototype.hasOwnProperty('valueOf')//true

