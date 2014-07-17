var currentTime = new Date();
var minutes = currentTime.getMinutes();
if (minutes < 10) {
	minutes = "0" + minutes;
}
var time = currentTime.getHours() + ":" + minutes;
console.log(time);