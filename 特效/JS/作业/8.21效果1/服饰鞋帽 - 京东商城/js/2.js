 var box1=document.getElementById("cen1xia"),	
 	 myli=box1.getElementsByTagName("ul")[0].getElementsByTagName('li');
	 ww=document.getElementById('www'),
	 wwul=ww.getElementsByTagName('ul');
	 
	
	for (var i =0;  i<myli.length; i++) {
			myli[i].index=i;
			myli[i].onmouseover=function(){
			
			for (var i =0;  i<myli.length; i++) {
					myli[i].className='';	
					wwul[i].style.display='none';				
				};
				this.className='list2';
				wwul[this.index].style.display='block';
			}
			
		};



		/*myli[0].onclick=function(){
             
		myli[0].className="list2"
		myli[1].className='none'
		myli[2].className='none'
		myli[3].className='none'
	
		wwul[0].style.display='block';
		wwul[1].style.display='none';
		wwul[2].style.display='none';
		wwul[3].style.display='none';
		}
		
		
		myli[1].onclick=function(){
		myli[1].className="list2"
		myli[0].className='none'
		myli[2].className='none'
		myli[3].className='none'
		
		wwul[1].style.display='block';
		wwul[0].style.display='none';
		wwul[2].style.display='none';
		wwul[3].style.display='none';
		}*/

