function likeFunc() {
	if (document.getElementById("likebtn").value == "Like") {
		document.getElementById("likebtn").value = "Dislike";
		document.getElementById("likebtn").style.background = "tomato";
	} else {
		document.getElementById("likebtn").style.background = "green";
		document.getElementById("likebtn").value = "Like";
	}
}