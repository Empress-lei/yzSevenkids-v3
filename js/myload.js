
$(function () {
    var tempUrl = ""
    //load 指导方案
    $(".list_li").click(function () {
        if(tempUrl != $(this).data("url") ) {
            tempUrl = $(this).data("url");
        }else {
            return
        }
        console.log($(this));
        myload($(this).data("url"),function () {
            $(".activi_div").hide();
        });
    })
})
function myload(url, callback) {
    //加载loading
    $(".activi_mess").html("");
    //加载loading
    $(".activi_mess").load(url, function () {
        if (typeof callback == "function") {
            callback();
        } else {
            return;
        }
    })
}