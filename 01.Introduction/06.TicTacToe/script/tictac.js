var playerTurn = 0;
var table = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

function checkSign(shouldIterate){
	if (shouldIterate) {
		playerTurn++;
	}
	if (playerTurn%2==0) {
		return "+"
	} else {
		return "-"
	}
}

function freeBox(value, sign) {
	var y = (Number)(value%10);
	value = (Number)(value/10);
	var x = Math.floor((Number)(value));
	if (table[x-1][y-1] == 0) {
		if (sign == "+") {
			table[x-1][y-1] = 1;
		} else {
			table[x-1][y-1] = 2;
		}
		return true;
	} else {
		return false;
	}
}

function isWinner(player) {
	for (var i = 0; i < 3; i++) {
		var isWinner = true;
		var isWinner2 = true;
		for (var j = 0; j < 3; j++) {
				if (table[i][j] != player) {
					isWinner = false;
				}
				if (table[j][i] != player) {
					isWinner2 = false;
				}	
			}
		if (isWinner ==  true) {
			return true;
		}
		if (isWinner2 == true) {
			return true;
		}
	}

	if (((table[0][0] == player) && (table[1][1] == player) && (table[2][2] == player)) || ((table[0][2] == player) && (table[1][1] == player) && (table[2][0] == player))) {
		return true;
	}

	return false;
}

function blockCells() {
	for (var i = 1; i < 4; i++) {
		for (var j = 1; j < 4; j++) {
			var currID = i + 10*j;
			document.getElementById(currID).disabled = true;
		}
	}
}

function draw () {
	isDraw = true;
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			if (table[i][j] == 0) {
				isDraw = false;
			}
		}
	}
	return isDraw;
}

function tic(boxID) {
	console.log(boxID);
	var value = boxID.id;
	var sign = checkSign(false);
	if (freeBox(value, sign) == true) {
		var sign = checkSign(true);
		document.getElementById(boxID.id).innerHTML= sign;
		boxID.disabled = true;

		if (isWinner(1) == true) {
			document.getElementById("win1").style.display = "block";
			blockCells();
			return;
		}
		if (isWinner(2) == true) {
			document.getElementById("win2").style.display = "block";
			blockCells();
			return;
		}
		if (draw() == true) {
			document.getElementById("win3").style.display = "block";
		}
	}
}