document.getElementById("calc").onclick = function () {
	var expr = document.getElementById("expression").value
    var result = eval(expr);
    document.getElementById("result").innerHTML= result;
};