$(function() {
    //宝宝出生日期
    var scrollYear,scrollMonth,scrollDay;
    var selectDate = $('.scrollDate');
    //获取当前的年月日
    var curTime = new Date();
    var curYear = curTime.getFullYear();
    console.log(curYear);
    var curMonth = curTime.getMonth()+1 >= 10 ? curTime.getMonth()+1 : ("0" + (curTime.getMonth()+1));
    console.log(curMonth);
    var curDate = curTime.getDate() >= 10 ? curTime.getDate() : ("0" + curTime.getDate());
    console.log(curDate);
    var timeInner = $('.showTime');
    var swiperYear,swiperMonth,swiperDay;
    //点击页面中的选择时间的位置出现弹层
    $('#nickSpan').off();
    $('#nickSpan').click(function() {
        selectDate.fadeIn();
        initSwiper(curYear,curMonth,curDate);
    });
    //点击取消，时间页面消失
    $('.btn_cancle').click(function() {
        selectDate.fadeOut();
    });

    //点击时间页面上的“确定”按钮，设置时间  页面取消
    $('.btn_sure').click(function() {
        //获取当前的时间
        var z = curYear + "年"  + curMonth + "月" + curDate + "日";
        //alert(curYear+curMonth+curDate);
        console.log(z);
        // $(".babyBirthday").val(timeInner.eq(0).html()+timeInner.eq(1).html()+timeInner.eq(2).html());
        //获取时间页面上选择到的时间
        var s=  timeInner.eq(0).html()+"年"+ timeInner.eq(1).html()+"月"+ timeInner.eq(2).html()+"日";
        console.log(s);
//		if(s > z) {
//			alert('所选时间不能大于当前时间');
//		}else {
        selectDate.fadeOut();
        $("#nickSpan").val(s);
        //}
    })
    //选择宝宝出生日期
    function initSwiper(curYear, curMonth, curDate) {
        //alert(curYear+" "+curMonth+" "+curDate);
        //获取年、月、日的索引值
        var yearIndex = curYear - 1981 - 1;
        var monthIndex = curMonth - 1 -1;
        var dateIndex = curDate - 1 - 1;
        swiperYear = new Swiper('#swiperYear', {
            direction: 'vertical',
            height: 45,
            loop: true,
            initialSlide: yearIndex,
            centeredSlides: true,
            paginationClickable: true,
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            //改变顶部年的值
            onSlideChangeEnd:function(swiper){
                //alert(111);
                var idx=swiper.activeIndex;
                console.log(idx);
                var o=$("#swiperYear").children("div.swiper-wrapper").find("div:eq("+idx+")");
                var curTime = $('.scrollDate .swiper-slide-next').eq(0).html();
                timeInner.eq(0).html(curTime);
            },
        })
        swiperMonth = new Swiper('#swiperMonth', {
            direction: 'vertical',
            height: 45,
            loop: true,
            initialSlide: monthIndex,
            centeredSlides: true,
            paginationClickable: true,
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            //改变顶部月的值
            onSlideChangeEnd:function(swiper){
                //alert(111);
                var idx=swiper.activeIndex;
                console.log(idx);
                var o=$("#swiperMonth").children("div.swiper-wrapper").find("div:eq("+idx+")");
                var curTime = $('.scrollDate .swiper-slide-next').eq(1).html();
                // alert(curTime);
                timeInner.eq(1).html(curTime);
            }
        })
        swiperDay = new Swiper('#swiperDay', {
            direction: 'vertical',
            height: 45,
            loop: true,
            initialSlide: dateIndex,
            centeredSlides: true,
            paginationClickable: true,
            observer: true, //修改swiper自己或子元素时，自动初始化swiper
            observeParents: true, //修改swiper的父元素时，自动初始化swiper
            //改变顶部日的值
            onSlideChangeEnd:function(swiper){
                //alert(111);
                var idx=swiper.activeIndex;
                console.log(idx);
                var o=$("#swiperDay").children("div.swiper-wrapper").find("div:eq("+idx+")");
                var curTime = $('.scrollDate .swiper-slide-next').eq(2).html();
                timeInner.eq(2).html(curTime);
            }
        })
    }
});

function getStr() {
    //拼接年月日标签
    var str = "";
    str += "<div class=\"scrollDate\">";
    str += "	<div class=\"scrollList\">	";
    str += "		<div class=\"scrollTit clearfix\">";
    str += "			<a href=\"javascript:void(0)\" class=\"btn_cancle\"><&nbsp;取消</a>";
    str += "			<span class=\"showTime\">2017</span>年";
    str += "			<span class=\"showTime\">01</span>月";
    str += "			<span class=\"showTime\">01</span>日";
    str += "				<a href=\"javascript:void(0)\" class=\"btn_sure\">确定&nbsp;></a>";
    str += "		</div>";
    str += "		<ul class=\"scrollTime\">";
    str += "			<li class=\"scrollYear\">";
    str += "				<div class=\"timeswiper-container\" id=\"swiperYear\">";
    str += "					<div class=\"swiper-wrapper\">";
    for(var i = 1; i <= 50; i++) {
        str += "<div class=\"swiper-slide\">" + (1980 + i) + "</div>";
    }
    str += "					</div>";
    str += "				</div>";
    str += "			</li>";
    str += "			<li class=\"scrollMonth\">";
    str += "				<div class=\"timeswiper-container\" id=\"swiperMonth\">";
    str += "					<div class=\"swiper-wrapper\">";
    for(var i = 1; i <= 12; i++) {
        if(i>=10){
            str += "<div class=\"swiper-slide\">" + i + "</div>";
        }else {
            str += "<div class=\"swiper-slide\">" + "0" + i + "</div>";
        }
    }
    str += "					</div>";
    str += "				</div>";
    str += "			</li>";
    str += "			<li class=\"scrollDay\"> ";
    str += "				<div class=\"timeswiper-container\" id=\"swiperDay\">";
    str += "					<div class=\"swiper-wrapper\">";
    for(var i = 1; i <= 31; i++) {
        if(i>=10) {
            str += "<div class=\"swiper-slide\">" + i + "</div>";
        }else {
            str += "<div class=\"swiper-slide\">" + "0" + i + "</div>";
        }
    }
    str += "					</div>";
    str += "				</div>";
    str += "			</li>";
    str += "		</ul>";
    str += "	</div>";
    str += "</div>";
    return str;
}
document.write(getStr());