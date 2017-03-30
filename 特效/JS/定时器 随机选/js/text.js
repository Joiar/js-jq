var data=['戎戈','淳淳','徐立刚','许岩','杨静静','周惊天','李阳','张琦']
var timer=null;
window.onload=function(){
	var title=document.getElementById('title'),
		start=document.getElementById('start'),
		stop=document.getElementById('stop');

		start.onclick=function(){
			clearInterval(timer)
			timer=setInterval(function(){
				var random=Math.floor(Math.random()*data.length);
				title.innerHTML=data[random];
			},100)
		}

		stop.onclick=function(){
			clearInterval(timer)
		}
}