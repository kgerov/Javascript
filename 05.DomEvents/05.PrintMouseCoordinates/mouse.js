setInterval((function() {
    window.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        event = event || window.event; // IE-ism
        var x = event.clientX;
        var str = "X:" + x + "; Y:" + event.clientY + " time: " + Date();
        document.getElementById('printArea').value = str;
    }
}), 500);