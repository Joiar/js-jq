var hezi1 = document.getElementById('hezi'),
	myul = hezi1.getElementsByTagName('ul')[0],

	zuo1 = document.getElementById('zuo'),
	you1 = document.getElementById('you'),
	num=0;

	you1.onclick=function(){
		num++;
		if (num>=2) {
			num=2; 
		}
		startMove(myul,num*-525,'marginLeft')
		}	
	zuo1.onclick=function(){
		num--;
		if (num<=0) {
			num=0; 
		}
		startMove(myul,num*-525,'marginLeft')
		}

	var texiao = document.getElementById('texiao3'),
		texiao3box=document.getElementById('texiao3box'),
		texiao3boxul=texiao3box.getElementsByTagName('ul')[0],
		sh = document.getElementById('shang'),
		xa = document.getElementById('xia');

		sh.onclick=function(){
		
		num++;
		if (num>=2){
			num=2; 
		}
		startMove(texiao3boxul,num*-207,'marginTop');
		}	

		xa.onclick=function(){
		
		num--;
		if (num<=0){
			num=0; 
		}
		startMove(texiao3boxul,num*-207,'marginTop');
		}	

		var top_left=document.getElementById('top_left'),
	mylist=top_left.getElementsByTagName('li');
	for (var i = 0; i < mylist.length; i++) {
		mylist[i].onmouseover=function(){
			for (var i = 0; i < mylist.length; i++) {
				startMove(mylist[i],'135','width');
				mylist[i].className='';
			};
			
			startMove(this,'300','width');
			this.className='list';
		}
	};