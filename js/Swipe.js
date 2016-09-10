function Swipe(container) {
    //获取第一个子节点
    var element = container.find(":first");//ul
    //滑动对象
    var swipe = {};

    //li页面数量
    var slides = element.find("li");//3

    //获取容器尺寸
    var width = container.width();
    var height = container.height();

    //设置li页面总宽度
    element.css({
        width: (slides.length * width) + 'px',//3 * width
        height: height + 'px'
    });

    //设置每一个页面li的宽度
    $.each(slides, function(index) {
        var slide = slides.eq(index); //获取到每一个li元素
        slide.css({
            width: width + 'px',
            height: height + 'px'
        });
    });

    //监控完成与移动
    swipe.scrollTo = function(x, speed) {
        //执行动画移动
        element.css({
            'transition-timing-function' : 'linear',//规定速度效果的速度曲线。
            'transition-duration'        : speed + 'ms',//规定完成过渡效果需要多少秒或毫秒。
            'transform'                  : 'translate3d(-' + x + 'px,0px,0px)'//应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。
        });
        return this;
    };

    return swipe;
}