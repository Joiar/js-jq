
			var cen32=document.getElementById('aaa'),

				ul1=cen32.getElementsByTagName('ul')[0],
				cen3_left=cen32.getElementsByTagName('cen3_left'),
				cen3_right=cen32.getElementsByTagName('cen3_right'),
				re=0,
				time;
				
				time=setInterval(function(){move()},3000)
				
				cen32.onmouseover=function(){
					
					clearInterval(time)

					}
				cen32.onmouseout=function(){
					time=setInterval(function(){move()},3000)
					}	
					
					function move(){
						re++;
						console.log(re);
						if(re>2)
						{re=0;
							startMove(ul1,re*-208,'marginLeft');
						//ul1.style.marginLeft=nu*-208+'px';
						}
						else{
							startMove(ul1,re*-208,'marginLeft');
						//ul1.style.marginLeft=nu*-208+'px';
							}
						};


      var cen31=document.getElementById('aaa');
		var myul1=cen31.getElementsByTagName('ul')[0],
	
	    mysp2=cen31.getElementsByTagName('p')[1],
	    nu=0,
	    mysp1=cen31.getElementsByTagName('p')[0];

		mysp1.onclick=function(){
		nu++;	
		if (nu>2) {			
			nu=0;
			 myul1.style.marginLeft=nu*-208+'px';	
		}else{
			 myul1.style.marginLeft=nu*-208+'px';
		};
	}

	mysp2.onclick=function(){
		nu--;
		if (nu<0) {		
			nu=2;
			 myul1.style.marginLeft=nu*-208+'px';	
		}else{
			 myul1.style.marginLeft=nu*-208+'px';
		};
	}
	


	 