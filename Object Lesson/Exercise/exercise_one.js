/***
 * Write a constructor for "Book" objects that should have the book’s title, author, the number of pages, and whether or not you have read the book
*/

//initialize constructor
function Book(title,author, numOfPages, read_status){
	this.title = title;
	this.author = author;
	this.numOfPages = numOfPages;
	this.read_status = read_status;
	this.info = function(){
		return this.title + "by " + this.author + ", " + this.numOfPages
		+ " pages, " + this.read_status; 
	}
}

//callback function
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295 , "not read yet" );
console.log(theHobbit.info());

/************END OF EXERCISE**************************************************/