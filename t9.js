    var cxt=document.getElementById("myCanvas9").getContext("2d"); 
    var mouseX;
    var mouseY;
    //获取鼠标位置
    function mouseOver(obj) {
    e = obj || window.event;
    mouseX =  e.layerX|| e.offsetX;
    mouseY =  e.layerY|| e.offsetY; 
    }
    //利用鼠标位置来画出圆形
    function drawImg(){
    cxt.clearRect(0,0,500,400);
    cxt.fillStyle="#FF0000";
    cxt.beginPath();
    cxt.arc(mouseX,mouseY,30,0,Math.PI*2,true);
    cxt.closePath();
    cxt.fill();
    }
    //执行函数
    function show(event) {
    mouseOver(event);
    drawImg();
    }