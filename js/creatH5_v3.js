$(function () {
    $(".first").addClass("current_nav");
    $(".home:eq(0)").show().siblings(".home").hide();
    $('.ui-widget-content').each(function () {
        $(this).dragging({
            move: 'both',
            randomPosition: false,
            hander: '.hander'
        });
    });
    //旁边导航
    seleRender(".craet_nav li", $(".home"))
    $(".prohibit .ui-resizable-handle").remove();
    $(".edit").dblclick(function () {
        //图片
        if ($(this).data("type") == "1") {
            $(".hander").css("height", 0);
            $(".hander").css("width", 0);
            editImg($(this).find("img"));
        // 文字
        } else if ($(this).data("type") == "2") {
            $(".hander").css("height", 0);
            $(".hander").css("width", 0);
            var tag = $(this);
            var flag = true;
            $(document).on("click", function (e) {//点击空白处
                var target = $(e.target);
                if (target.closest(tag).length == 0 && flag == true) {
                    flag = false;
                    $(".hander").css("height", "100%");
                    $(".hander").css("width", "100%");
                    $(".btn-toolbar").hide();
                }
            });
        }else if ($(this).data("type") == "7") {
            $(".hander").css("height", 0);
            $(".hander").css("width", 0);
            editImg($(this).find("img"));
            // var tag = $(this);
            // var flag = true;
            // $(document).on("click", function (e) {//点击空白处
            //     var target = $(e.target);
            //     if (target.closest(tag).length == 0 && flag == true) {
            //         flag = false;
            //         $(".hander").css("height", "100%");
            //         $(".hander").css("width", "100%");
            //     }
            // });
        }
    })
})

//在原位置修改图片
var currentEle = {src: ""};
$("#File").change(function () {
    var file = this.files[0];
    // console.log(file);
    if (window.FileReader) {
        var reader = new FileReader();
        console.log(reader);
        reader.readAsDataURL(file);
        //监听文件读取结束后事件
        reader.onloadend = function (e) {
            //e.target.result就是最后的路径地址
            console.log(e.target.result)
            console.log(currentEle)
            currentEle.attr("src", e.target.result);
            $(".hander").css("height", "100%");
            $(".hander").css("width", "100%");
        };
    }
});

function editImg(ele) {
    console.log(ele)
    var eleth = $(ele);
    currentEle = eleth;
    // var eleSrc = eleth.attr("src");
    $("#File").click();
}

//单选选择标签
function seleRender(item, obj) {
    var item = $(item);
    item.on("click", function () {
        item.removeClass("current_nav");
        $(this).addClass("current_nav");
        $(obj).eq($(this).index()).show().siblings(".home").hide();
        $('.ui-widget-content').each(function () {
            $(this).dragging({
                move: 'both',
                randomPosition: false,
                hander: '.hander'
            });
        });
    })
}
