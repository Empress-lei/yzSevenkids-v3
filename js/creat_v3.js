//记录文本框中的字数
function fn() {
    var len = $(".render_intr").val().length;
    $(".length span").text(len);
}
function vfn() {
    var len = $(".render_intr").val().length;
    if(len < 10) {
        toast("至少输入10个字符");
        return false;
    }
}
$(function () {
    //点击查看示例，弹出蒙城
    $(".look_exam").click(function () {
        $(".exam_pages").show();
    })
    //园所示例蒙城
    $(".exam_pages .exam_close").click(function () {
        $(".exam_pages").hide();
    })


    //城市联动选择
    $(".pick-area1").pickArea({
        "getVal":function(){
            var thisdom = $("."+$(".pick-area-dom").val());
            var thisdom = $("." + $(".pick-area-dom").val());
            thisdom.next().val($(".pick-area-hidden").val());
            var province = $(".pick-area .pick-province").html(), city = $(".pick-area .pick-city").html() ,qu = $(".pick-area .pick-county").html();
            province = province == city ? province : (province + (city == '请选择市' ? '' : city));
            province +=  qu == '请选择县' ? '' : qu ;
            $(".mess_add .element-box .time_num :nth-child(1)").html(province)
        }
    });
    $('.intr_mess').bind('input propertychange', function () {
        $(".mess_add .element-box .time_num :nth-child(2)").html($(".intr_mess").val())
    })
    //电话号码
    $('#tell').bind('input propertychange', function () {
        $(".mess_tell .element-box .time_num span").html($("#tell").val());
    })
    //修改学校的名字
    $('.inn').bind('input propertychange', function () {
        var innVal = $("#in").val();
        var intVal = $("#inp_partner").val();
        if(intVal == "") {
            $('.linkageName .element-box div').html(innVal);
        }else {
            $('.linkageName .element-box div').html(innVal + "&nbsp;" + "&" + "&nbsp;" + intVal);
        }
    });
    //获取文本
    $('.render_intr').bind('input propertychange', function () {
        $(".renderIntr .element-box div").html($('.render_intr').val());
    })

    //选择年月日
    layui.use('laydate', function () {
        var laydate = layui.laydate;
        //常规用法
        laydate.render({
            elem: '#time_year'
            ,type: 'datetime'
            , done: function (value, date, endDate) {
                console.log(value); //得到日期生成的值，如：2017-08-18
                console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
                console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
                $(".mess_pro .element-box .time_num span").html(value);
            }
        });
    })
})

$(function () {
    $(window).scroll(function(event){
        var aa = $(window).scrollTop();
        if(aa >= 100) {
            $(".creat_content").css("position","fixed");
            $(".creat_content").css("top","120px");
        }else {
            $(".creat_content").css("position","relative");
            $(".creat_content").css("top","0");
        }
    });
})