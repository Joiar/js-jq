    var glb_Retval =150;
    var glb_PageSize = 12;
    var glb_CurrentPage = 1;

	$(function(){
		$("#pageMenuBox").html(setPage(glb_CurrentPage, glb_PageSize, glb_Retval));//初始化分页按钮
		$(".btnGoTo").live("click",function(){
			var index=$(".pageNo").val();
           var i = $(this).index();
			glb_CurrentPage=parseInt(index);
			$("#pageMenuBox").html(setPage(glb_CurrentPage, glb_PageSize, glb_Retval));//初始化分页按钮

		});
	});

    function pageAjax(obj) {
        glb_CurrentPage = parseInt(obj.id.substr(1));
        callFunByCatID();
    }

    function callFunByCatID() {

		$("#pageMenuBox").html(setPage(glb_CurrentPage, glb_PageSize, glb_Retval));//初始化分页按钮
    }

    function ajaxCallFun(url, data) {
        $.ajax({
            type: "post",
            url: url,
            dayaType: "json",
            data: data,
            beforeSend: function (XMLHttpRequest) {
            },
            success: function (d, textStatus) {
                successFun(d);
            },
            complete: function (XMLHttpRequest, textStatus) {

            }
        });
    }
    function successFun(data) {
        glb_Retval = parseInt(data[0]);
        bindRightItems(data[1], glb_CatID);
    }
    function bindRightItems(data, catId) {
		//

	$("#pageMenuBox").html(setPage(glb_CurrentPage, glb_PageSize, glb_Retval));//初始化分页按钮

	};
