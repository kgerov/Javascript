function evaluate() {
	var expression = document.getElementById("expression").value;
	expr = expr.replace(/[^\d\+\-\*\/\.\(\)%]/g, '');
	console.log(expression);
	var resultWrapper = document.getElementById('result');
	resultWrapper.innerHTML = eval(expression);
}