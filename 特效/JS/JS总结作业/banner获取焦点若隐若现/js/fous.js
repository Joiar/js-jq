
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