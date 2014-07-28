document.getElementById('btnHideOddRows').onclick = function() {
	var tr = document.getElementsByTagName("tr");
	if (tr[0].style.display != "none") {
		for (var i = 0; i < tr.length; i++) {
			if (i % 2 == 0) {
				tr[i].style.display = "none";
			}
		}
		this.innerHTML = "Show Odd Rows";
	} else {
		for (var i = 0; i < tr.length; i++) {
			tr[i].style.display = "block";
		}
		this.innerHTML = "Hide Odd Rows";
	}
}