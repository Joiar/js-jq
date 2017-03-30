var toTop={
 $:function(id){
  return typeof id==='string'?document.getElementById(id):id;
 },
 gotoTop:function(topId,dis,speed){
  var topBtn=this.$(topId);
  window.onscroll=function(){
   var top=document.body.scrollTop || document.documentElement.scrollTop;
	if(top>dis){
	  topBtn.style.display='block';
	}else{
	  topBtn.style.display='none';
	}
	topBtn.onmouseover=function(){
	 this.style.backgroundPosition='right top';
	}
	topBtn.onmouseout=function(){
	 this.style.backgroundPosition='left top';
	}
	topBtn.onclick=function(){
	 var repeat;
	 repeat=setInterval(change,50)
	 function change(){
	  var top=document.body.scrollTop || document.documentElement.scrollTop;
      if(top==0){
	   clearInterval(repeat);
	  }else{
	   var newTop=Math.floor((0-top)/speed)+top;
	   console.log(newTop);
	   window.scrollTo(0,newTop);
	  }
	 }
	}
  }
 }
}
window.onload=function(){
 if(toTop.$('toTop')){
  toTop.gotoTop('toTop',300,5);
 }
 if(toTop.$('topButton')){
  toTop.gotoTop('topButton',500,20);
  tab.change();
 }
}









