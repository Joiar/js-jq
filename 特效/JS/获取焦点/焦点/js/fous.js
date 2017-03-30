/*var focusImg=document.getElementById("focusImg"),//大盒子
	next=document.getElementById("next"),//右按钮
	previous=document.getElementById("previous"),//左按钮
	mark_l=document.getElementById("mark_l"),//左遮
	mark_r=document.getElementById("mark_r"),//右遮
	aImg=focusImg.getElementsByTagName('ul')[0].getElementsByTagName('li'),
	aoli=focusImg.getElementsByTagName('ol')[0].getElementsByTagName('li'),
	n=0,
	z=1,
	timer=null;

function change(){
	aImg[n].style.opacity=0;
	startMove(aImg[n],100,"opacity");
	aImg[n].style.zIndex=++z;
	for (var i = 0; i < aoli.length; i++) {
		aoli[i].className='';
	};
	aoli[n].className='on';
}

previous.onmouseover=mark_l.onmouseover=function(){
	previous.style.display='block';
	clearInterval(timer);
}
previous.onmouseout=mark_l.onmouseout=function(){
	previous.style.display='none';
}
next.onmouseover=mark_r.onmouseover=function(){
	next.style.display='block';
}
next.onmouseout=mark_r.onmouseout=function(){
	next.style.display='none';
}

//
next.onclick=function(){
	n++;
	if (n>=aImg.length) n=0;
	change();
}
previous.onclick=function(){
	n--;
	if (n<0) n=aImg.length-1;
	change();
}
function tIme(){
	timer=setInterval(function(){
		next.onclick();*/
		/*n++;
		if (n>=aImg.length) n=0;
		change();*/
/*	},2000)
}
tIme()
focusImg.onmouseover=function(){
	clearInterval(timer)
}
focusImg.onmouseout=function(){
	tIme()
}

for (var i = 0; i <aoli.length; i++) {
	aoli[i].index=i;
	aoli[i].onmouseover=function(){
		n=this.index;
		change();
	}
};*/
function FousImg(Id){
	this.focusImg=document.getElementById(Id);
	this.aImg=this.focusImg.getElementsByTagName('ul')[0].getElementsByTagName('li');
	this.aoli=this.focusImg.getElementsByTagName('ol')[0].getElementsByTagName('li');
	this.n=0;
	this.z=1;
	this.timer=null;
}
FousImg.prototype.change=function(){
	this.aImg[this.n].style.opacity=0;
	startMove(this.aImg[this.n],100,"opacity");
	this.aImg[this.n].style.zIndex=++this.z;
	for (var i = 0; i < this.aoli.length; i++) {
		this.aoli[i].className='';
	};
	this.aoli[this.n].className='on';
}
FousImg.prototype.tIme=function(){
	var that=this;
	this.timer=setInterval(function(){
		that.n++;
		if (that.n>=that.aImg.length) that.n=0;
		that.change();
	},2000);
	this.focusImg.onmouseover=function(){
		clearInterval(that.timer)
	}
	this.focusImg.onmouseout=function(){
		that.tIme()
	}
	this.btnBt();
}
FousImg.prototype.btnBt=function(){
	var that=this;
	for (var i = 0; i <this.aoli.length; i++) {
		this.aoli[i].index=i;
		this.aoli[i].onmouseover=function(){
			that.n=this.index;
			that.change();
		}
	}
}