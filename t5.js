var box = document.getElementById("box");
 //鼠标按下的函数
 box.onmousedown = function(ev) {
 var oEvent = ev || event;
 //求出鼠标和box的位置差值
 var x = oEvent.clientX - box.offsetLeft;
 var y = oEvent.clientY - box.offsetTop;
 //鼠标移动的函数
 //把事件加在document上，解决因为鼠标移动太快时，
 //鼠标超过box后就没有了拖拽的效果的问题
 document.onmousemove = function(ev) {
  var oEvent = ev || event;
  
  //保证拖拽框一直保持在浏览器窗口内部，不能被拖出的浏览器窗口的范围
  var l = oEvent.clientX - x;
  var t = oEvent.clientY - y;
  if(l < 0) {
  l = 0;
  
  } else if(l > document.documentElement.clientWidth - box.offsetWidth) {
  l = document.documentElement.clientWidth - box.offsetWidth;
  }
  if(t < 0) {
  t = 0;
  } else if(t > document.documentElement.clientHeight - box.offsetHeight) {
  t = document.documentElement.clientHeight - box.offsetHeight;
  }
  box.style.left = l + "px";
  box.style.top = t + "px";
 }
 //鼠标抬起的函数
 document.onmouseup = function() {
  document.onmousemove = null;
  document.onmouseup = null;
 }
 //火狐浏览器在拖拽空div时会出现bug
 //return false阻止默认事件，解决火狐的bug
 return false;
  
 }

