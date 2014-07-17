function calcCylinderVol(radius, height) {
	return Math.round(3.14159265359*radius*radius*height*1000)/1000;
}

console.log(calcCylinderVol(2, 4));
console.log(calcCylinderVol(5, 8));
console.log(calcCylinderVol(12, 3));