/**The Prototype**
 *  
 * All objects in JavaScript have a prototype. 
 * The prototype is another object that the original object inherits from, 
 * which is to say, the original object has access to all of its prototype’s methods and properties.
 *
 */

 /* SOME MAIN POINT ABOUT PROTOTYPE:
	1. All Object in Javascript have a prototype
	2. The prototype is another object
	3. …that the original object inherits from, and has access to all of its prototype’s methods and properties
*/

/**Accessing an object's prototype :
 * getPrototypeOf() is a method from Prototype
 * return value : .prototype property of the Object Constructor */
 
/* (i.e., Player(name, marker)) - Object.getPrototypeOf(player1 === Player.prototype)*/

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`Hello, I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  console.log(`My marker is '${this.marker}'`);
};

Object.getPrototypeOf(Player.prototype); // returns Object.prototype

// Now make `Player` objects inherit from `Person`
Object.setPrototypeOf(Player.prototype, Person.prototype);
Object.getPrototypeOf(Player.prototype); // returns Person.prototype

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

player1.sayName(); // Hello, I'm ste
player2.sayName(); // Hello, I'm also steve!

player1.getMarker(); // My marker is 'X'
player2.getMarker(); // My marker is 'O'



/*******************************************************/

/* 
Properties or method that are define with Object.prototype will be available to the created Player Object
*/

//Example
Player.prototype.sayHello = function(){
	console.log("Hello! Im a player");
}

player1.sayHello(); //logs "Hello! Im a player"
player2.sayHello(); //logs "Hello! Im a player"

/** Note: this is useful if you want to defined method or properties on all of the Object
 * or in this case 'Player' object **/

/** Why? 2 main reasons:
 
 1. To save memory
	Defining every property and function takes up a lot of memory, especially if you have a lot of common properties and functions, and a lot of created objects! Defining them on a centralized, shared object which the objects have access to, thus saves memory.

 2. Prototypal Inheritance
	Objects inherit from the Object.prototype object, which allows them to access functions like .sayHello from Player.prototype
 
Summary:
Essentially, this is how JavaScript makes use of prototype - by having the objects contain a value - to point to prototypes and inheriting from those prototypes, and thus forming a chain.

Note:-
1. Every prototype object inherits from Object.prototype by default.
2. An object’s Object.getPrototypeOf() value can only be one unique prototype object.

**/

