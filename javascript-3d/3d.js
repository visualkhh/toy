window.addEventListener('DOMContentLoaded', function () {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    // ctx.fillStyle = "blue";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Add behind elements.
    // ctx.globalCompositeOperation = 'destination-over'
// Now draw!


    window.background = function(color) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    window.pushMatrix = function() {
        ctx.save();
    };
    window.popMatrix = function() {
        ctx.restore();
    };
    window.stroke = function(color) {
        ctx.strokeStyle = color;
    };
    window.noStroke = function(color) {
        ctx.strokeStyle = undefined;
    };
    window.line = function(x, y, dx, dy) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(dx, dy);
        ctx.stroke();
    };
    window.fill = function(color) {
        ctx.fillStyle = color;
        ctx.fill();
    };
    window.ellipse = function(x, y, w, h) {
        ctx.beginPath();
        ctx.ellipse(x, y, w, h, Math.PI / 4, 0, 2 * Math.PI);
        ctx.stroke();
    };

    window.translate = function(x, y) {
        ctx.translate(x, y);
    };
    // window.sin = function(v) {
    //     return Math.sign(v)
    // };
    // window.cos = function(v) {
    //     return Math.cos(v)
    // };


    // canvas.addEventListener("mousedown", onMouseDown, false);
    // canvas.addEventListener("mouseup", onMouseUp, false);
    // canvas.addEventListener("mousemove", onMouseMove, false);

    var pmouse;
    canvas.addEventListener("mousemove", function(e) {
        var cursor = {
            x: e.offsetX || e.originalEvent.layerX,
            y: e.offsetY || e.originalEvent.layerY,
            px: pmouse&&pmouse.x?pmouse.x:undefined,
            py: pmouse&&pmouse.y?pmouse.y:undefined
        };
        // if (mouseDragged) {
        //     mouseDragged(cursor);
        // }
        pmouse = cursor;
    }, false);



    setInterval(draw, 1000);
});
