	var box=document.getElementById('banner'),
		myul=banner.getElementsByTagName('ul')[0],
		myul_li=myul.getElementsByTagName('li'),
		
		myol=banner.getElementsByTagName('ol')[0],
		myol_li=myol.getElementsByTagName('li'),
		
		timer,
		num=0;
		
		timer=setInterval(function(){mov()},4000)	
		function mov(){
			if (num==0) {
				myul.style.marginTop=0;
			};
			num++;
			startMove(myul,num*-240,'marginTop')
			
			if (num==6){
				num=0;
			};
			for (var i = 0; i < myol_li.length; i++) {
				myol_li[i].className=''
			};
			myol_li[num].className='list';
		}
			

		
			box.onmouseover=function(){
			clearInterval(timer)
			}
		    box.onmouseout=function(){          
			timer=setInterval(function(){mov()},4000)
			}
			
			for(var i=0;i<myol_li.length;i++){
				myol_li[i].index=i;
				myol_li[i].onmouseover=function()
				{
					num=this.index-1;
					mov()
				}	
			}
