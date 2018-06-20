/**
 * Created by Administrator on 2018/1/10.
 */
$(function () {

    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        slidesPerView: "auto",
        centeredSlides: true,
        paginationClickable: true,
        normalizeSlideIndex: true,
        /*
         * 设置为true -> 开启图片延迟加载
         * <img>的src属性改为data-src，class增加一个'swiper-lazy'
         * 如果直接用div，设置background，对应的改为data-background即可
         */
        lazyLoading: true,
        lazyLoadingInPrevNext: true,
        // 这个为true时，↓才有用
        lazyLoadingInPrevNextAmount: 1,
        onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            console.log(swiper.activeIndex);
            $(".look_intr").data("status", "2");
            if (!$(".look_intr").data('status') || $(".look_intr").data('status') == 1) {
                $(".backIntr").css("height", "98%");
                $(".backIntr").css("top", "15px");
                // $(".backIntr").css("zIndex", "10");
                $(".renderIntr").css("height", "85%");
                $(".renderIntr").css("top", "30px");
                $(".renderIntr").css("zIndex", "11");
                $(".look_intr").parent().parent().css("top", "460px")
                $(".look_intr").parent().parent().css("zIndex", "12");
                $(".look_intr").parent().parent().css("background-image", "none");
                $(".look_intr").html("向上收起");
                $(".look_intr").addClass("look_intrtop");
                $(".look_intr").data("status", "2");
            } else {
                $(".backIntr").css("height", "288px");
                $(".backIntr").css("top", "75px");
                // $(".backIntr").css("zIndex", "1");
                $(".renderIntr").css("height", "230px");
                $(".renderIntr").css("top", "90px");
                $(".renderIntr").css("zIndex", "2");
                $(".look_intr").parent().parent().css("top", "278px")
                $(".look_intr").parent().parent().css("zIndex", "12");
                $(".look_intr").parent().parent().css("background-image", "-webkit-linear-gradient(top, rgba(255, 255, 255, 0.2), rgb(255, 255, 255));");
                $(".look_intr").html("向下展开");
                $(".look_intr").removeClass("look_intrtop");
                $(".look_intr").data("status", "1");
            }
        }
    });
})