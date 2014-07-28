var lastLegit = "";

function notNum(box) {
	for (var i = 0; i < box.length; i++) {
		if (!((box.charCodeAt(i) >= 48 && box.charCodeAt(i) <= 57) || box.charCodeAt(i) == 8 || box == "")) {
			return true;
		}	
	}

	return false;
}

function check() {
	var box = document.getElementById("numOnly").value;
	if (notNum(box)) {
	    var delay=1000;
	    document.getElementById("numOnly").style.background = "red";
	    document.getElementById("numOnly").disabled = true;
    	setTimeout(function(){
    		document.getElementById("numOnly").style.background = "none";
    		document.getElementById("numOnly").disabled = false;
    		document.getElementById("numOnly").value = lastLegit;
	    },delay);
	} else {
		lastLegit = box;
	}
}