// JavaScript Document
window.onload=function(){
	//创建数组存放省市
	//创建一维数组存放市
	var cityBj=["海淀区","昌平区","西城区","大兴","朝阳区"]
	var citySx=["大同","朔州","太原","临汾","晋城","运城"]
	var cityHn=["安阳","郑州","开封","平顶山","洛阳","安阳","鹤壁","新乡","焦作"]
	//创建二维数组存放省及市
	var proArray=[];
	proArray[0]=["北京",cityBj]
	proArray[1]=["山西",citySx]
	proArray[2]=["河南",cityHn]
	//2、将省份添加到对应的下拉列表中
	for(i=0;i<proArray.length;i++){
		document.address.province.options.add(new Option(proArray[i][0],proArray[i][0]))
	}
	//3、将对应的市添加到下拉列表中
	var cityArray=proArray[0][1]//创建一个数组存放对应的市
	for(j=0;j<cityArray.length;j++){
		document.address.city.options.add(new Option(cityArray[j]))
	}
	//4、当省的选项改变时，对应的市也要发生改变
	document.address.province.onchange=function(){
		//先删除原有的市的列表项
		for(m=document.address.city.options.length-1;m>=0;m--){
			document.address.city.remove(m)//remove(删除的列表项的下标)删除列表项
		}
		var idx=this.selectedIndex;//获取选中项的索引
		//alert(idx)
		cityArray=proArray[idx][1]//创建一个数组存放对应的市
		for(j=0;j<cityArray.length;j++){
			document.address.city.options.add(new Option(cityArray[j]))
		}
	}
}