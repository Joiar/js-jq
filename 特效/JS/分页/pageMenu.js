///<reference path="jquery-1.4.4.min.js" />
function setPage(cPage, pageSize, rowCount) {
    var totalPage = Math.floor(Math.max((parseInt(rowCount, 10) + parseInt(pageSize, 10) - 1) / parseInt(pageSize, 10), 1)); //总行数
    
    var outPut = "";
    if (totalPage >= 1) {
        if (cPage != 1) {
            outPut += linkHtm("a1", "首页");
        }
        if (cPage > 1) {
            outPut += linkHtm("a" + (cPage - 1), "<i class='triangle'></i> <span>上一页</span>");
        }
        var currint = 2;
        for (var i = 0; i <= 4; i++) {
            if ((cPage + i - currint) >= 1 && (cPage + i - currint) <= totalPage)
                if (currint == i) {
                    outPut += cpageHtm(cPage);
                }
                else {
                    outPut += linkHtm("a" + (cPage + i - currint), (cPage + i - currint));
                }
        }

        if (cPage < totalPage) {

            outPut += linkHtm("a" + (cPage + 1), "<span>下一页</span> <i class='triangleR'></i>");
        }
        if (cPage != totalPage) {
            outPut += linkHtm("a" + totalPage, "尾页");
        }

    } else {
        outPut = "……";
    }
    
    return outPut;
}

function linkHtm(id, showWord) {

    return "<a herf='javascript:void(0)'  id=\"" + id + "\"  onclick=\"pageAjax(this)\">&nbsp;" + showWord + "&nbsp;</a>";
}
function cpageHtm(showWord) {
    return "<span class='currentPage'>&nbsp;" + showWord + "&nbsp;</span>";
}
function notEnabled(showWord) {
    return "<span class='notEnabled'>&nbsp;" + showWord + "&nbsp;</span>";
}

function jsonDateToString(date) {
    date = new Date(parseInt(date.replace("/Date(", "").replace(")/", ""), 10));
    return date.toLocaleDateString();
}
function jsonDateToFString(date) {
    var dt = new Date(parseInt(date.replace("/Date(", "").replace(")/", ""), 10));
    return dt.getFullYear() + "-" + (dt.getMonth() + 1) + "-" + dt.getDate();

}
 
