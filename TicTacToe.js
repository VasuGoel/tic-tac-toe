// Booleans for conditionals
var player1 = true;
var player2 = false;
var gameOver = false;

// Defining buttons and Event Listeners
var td = document.querySelectorAll("td");
for ( var i = 0; i < td.length; i++) {
	td[i].addEventListener("click", init(i));

	function init(i) {
  		return function() {
	  		if ( !gameOver ) {
				if (this.classList.contains("cross") !== true && this.classList.contains("circle") !== true) {

					if (player1) {
						this.classList.add("cross");
						player1 = !player1;
						player2 = !player2;
						document.querySelector("#player").innerHTML = 2;
					} else {
						this.classList.add("circle");
						player1 = !player1;
						player2 = !player2;
						document.querySelector("#player").innerHTML = 1;
					}

				rowCheck(i);
				columnCheck(i);
				diagonalCheck(i);
				}
			}
 	 	}
	}
}

// Function to compare rows
var rowCompare = [];

function rowCheck(num) {
	var index = num;
	if ( index < 3 ) {
		for (var i = 0; i < 3; i++) {
			rowCompare.push(td[i].classList.item(0));
		}
		getResult(rowCompare);
	} else if ( index >= 3 && index < 6 ) {
		for (var i = 3; i < 6; i++) {
			rowCompare.push(td[i].classList.item(0));
		}
		getResult(rowCompare);
	} else if ( index >= 6 && index < 9)	{
		for (var i = 6; i < 9; i++) {
			rowCompare.push(td[i].classList.item(0));
		}
		getResult(rowCompare);
	}
}

// Function to compare columns
var columnCompare = [];

function columnCheck(num) {
	var index = num;
	if ( index === 2 || index === 5 || index === 8){
		for (var i = 2; i < 9; i+=3) {
			columnCompare.push(td[i].classList.item(0));
		}
		getResult(columnCompare);
	} else if ( index === 0 || index === 3 || index === 6 ) {
		for (var i = 0; i < 9; i+=3) {
			columnCompare.push(td[i].classList.item(0));
		}
		getResult(columnCompare);
	} else if ( index === 1 || index === 4 || index || 7) {
		for (var i = 1; i < 9; i+=3) {
			columnCompare.push(td[i].classList.item(0));
		}
		getResult(columnCompare);
	}
}

// Function to compare diagonals
var diagonalCompare = [];

function diagonalCheck(num) {
	var index = num;
	if ( index === 0 || index === 8){
		for (var i = 0; i <= 8; i+=4) {
			diagonalCompare.push(td[i].classList.item(0));
		}
		getResult(diagonalCompare);
	} else if ( index === 2 || index === 6 ) {
		for (var i = 2; i <= 6 ; i+=2) {
			diagonalCompare.push(td[i].classList.item(0));
		}
		getResult(diagonalCompare);
	} else {
		for (var i = 0; i <= 8; i+=4) {
			diagonalCompare.push(td[i].classList.item(0));
		}
		getResult(diagonalCompare);
		for (var i = 2; i <= 6 ; i+=2) {
			diagonalCompare.push(td[i].classList.item(0));
		}
		getResult(diagonalCompare);
	}
}

function getResult(string) {
	var result = arrayCompare(string);
		if (result === "cross") {
			gameOver = true;
			alert("Player 1 won!");
			score1++;
			p1Score.innerHTML = score1;
			document.querySelector("#playerMessage").innerHTML = "Player 1 won!";
			document.querySelector("#playerMessage").style.fontSize = "20px";
		} else if (result === "circle") {
			gameOver = true;
			alert("Player 2 won!");
			score2++;
			p2Score.innerHTML = score2;
			document.querySelector("#playerMessage").innerHTML = "Player 2 won!";
		} else {
			for(var k = 0; k < 3; k++) {
				string.pop();
			}
		}
}

function arrayCompare(array) {
	var compare = array[0];
	for(var i = 1; i < 3; i++) {
		if(compare !== array[i]) {
			return false;
		}
	}
	return array[0];
}

// Display winning message, Defining New Game and Reset Button
 var score1 = 0;
 var score2 = 0;
 var p1Score = document.querySelector("#p1Score");
 var p2Score = document.querySelector("#p2Score");
 var newGame = document.querySelector("#newGame");
 var reset = document.querySelector("#reset");

 newGame.addEventListener("click", clearBoard);

 resetButton.addEventListener("click", function() {
	clearBoard();
 	score1 = 0;
 	score2 = 0;
	p1Score.innerHTML = 0;
	p2Score.innerHTML = 0;
 });

 function clearBoard() {
 	for ( var i = 0; i < td.length; i++) {
 		td[i].classList.remove("cross");
 		td[i].classList.remove("circle");
 	}
 	for(var k = 0; k < 3; k++) {
 		rowCompare.pop();
 		columnCompare.pop();
 		diagonalCompare.pop();
 	}
 	player1 = true;
 	player2 = false;
 	gameOver = false;
 	document.querySelector("#playerMessage").innerHTML = "Player <span id=player>1</span>'s turn";
 }
