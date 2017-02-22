var c=document.getElementById("myCanvas");
var cxt=c.getContext("2d");
/*插入矩形*/
cxt.fill();
cxt.fillStyle="#FF0000";
cxt.fillRect(0,0,150,75);
/*插入圆形*/
cxt.fillStyle="#FF0000";
cxt.beginPath();
cxt.arc(200,200,20,0,Math.PI*2,true);
cxt.closePath();
cxt.fill();

/*插入图标*/
var img=new Image()
img.src="images/tx.jpg"
cxt.drawImage(img,250,250);

