Array.prototype.removeItem = function(item) {
	for (i = 0; i < this.length; i++) {
	   if (this[i] === item) {
	   		this.splice(i, 1);
	   }
	}
}


var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
arr.removeItem(1);
console.log(arr);
arr = ['hi', 'bye', 'hello' ];
arr.removeItem('bye');
console.log(arr);