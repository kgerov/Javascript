function treeHouseCompare(a, b) {
	houseArea = parseFloat(Math.round((Math.pow(a, 2) + (a*2/3*a/2))*100)/100).toFixed(2);
	treeArea = parseFloat(Math.round(((b*b/3) + (Math.pow(b/3*2, 2)*3.14159265359))*100)/100).toFixed(2);
	if (Number(houseArea) > Number(treeArea)) {
		return "house/" + houseArea;
	} else {
		return "tree/" + treeArea;
	}

}

console.log(treeHouseCompare(3, 2));
console.log(treeHouseCompare(3, 3));
console.log(treeHouseCompare(4, 5));