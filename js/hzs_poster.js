
$(function () {
    $(".drag_text").resizable({
        aspectRatio: false
    });
    $(".drag_img").resizable({
        aspectRatio: true
    });
    //邀约海报编辑朦层上的关闭按钮
    $(".poster_pages .poster_close").click(function () {
        $(".poster_pages").hide();
    })
    //签到海报上的关闭按钮
    $(".sgin_pages .poster_close").click(function () {
        $(".sgin_pages").hide();
    })
    //签到海报和邀约海报上的关闭按钮
    $(".poster_exhi .poster_close").click(function () {
        $(".poster_exhi").hide();
    })
    // 点击预览
    $(".prev_txt").click(function () {
        $(".cord_pages").show();
    })
    // //点击转发  出现二维码
    // $(".send_txt").click(function () {
    //     $(".cord_pages").show();
    //     $(".poster_pages").hide();
    //     $(".sgin_pages").hide();
    // })
    //二维码上的的关闭按钮
    $(".cord_pages .poster_close").click(function () {
        $(".cord_pages").hide();
    })

});

