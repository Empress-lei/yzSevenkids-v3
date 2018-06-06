//修改文字大小
var thix;
$(function () {
    //双击文字，修改字体大小
    $('.intersected').click(function (e) {
        thix = $(this);
        console.log(thix.index())
        var aaaStyle = thix.css("font-size");
        console.log(aaaStyle)
        $(".btn-toolbar .dropdown-toggle").text(aaaStyle);
        $(".btn-toolbar").show();
        // e.stopPropagation();
    })
    $('.dropdown-menu li a').click(function () {
        obtainSize($(this));
        $(".btn-toolbar").hide();
        $(".dropdown-menu").hide()
    })
    $(".dropdown-toggle").click(function (e) {
        e.stopPropagation();
        $(".dropdown-menu").show();
    })
});
function obtainSize(obj) {
    var obj = $(obj);
    console.log(obj)
    var text = obj.data("size");
    console.log(text);
    thix.css("fontSize", text);
}