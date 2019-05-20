$(function () {

    $('.catList li').hover(function () {
        $(this).find('.ecd_erji').show();
    }, function () {
        $(this).find('.ecd_erji').hide();
    })
    $('#index_nav li').hover(function () {
        $(this).children().css('color', 'red')
    }, function () {
        $(this).children().css('color', 'black')
    })

    $('.catList li').click(function () {
        location.href = 'html/list.html?'
    })
    //秒杀商品倒计时
    window.setInterval(getTimer, 10);/*设置不间断定时器执行getTimer函数*/
    var endtime = new Date("2019/09/16 10:40:23");
    function getTimer() {
        var nowtime = new Date();/*获取当前时间*/
        var cha = endtime.getTime() - nowtime.getTime();/*得到它们相差的时间*/
        var day = Math.floor(cha / 1000 / 60 / 60 / 24); /*划分出时分秒*/
        var hour = Math.floor(cha / 1000 / 60 / 60 % 24);
        var minute = Math.floor(cha / 1000 / 60 % 60);
        var second = Math.floor(cha / 1000 % 60);
        if (minute <= 9) minute = '0' + minute;
        if (second <= 9) second = '0' + second;
        if (hour <= 9) hour = '0' + hour;
        $('.houer').html(hour);
        $('.minutes').html(minute);
        $('.seconds').html(second);
    }

    //大轮播图
    function chart() {
        var iw = $('#warpContent li').eq(0).outerWidth();
        // console.log(iw)
        $('#warpContent li').css('left', -iw);
        $('#warpContent li').eq(0).css('left', 0);
        //2.开启定时器自动轮播：旧图挪走，新图进入
        var timer = null;
        var now = 0;//可视区图片的下标
        timer = setInterval(next, 2000);
        function next() {
            //旧图挪走，新图进入
            $('#warpContent li').eq(now).animate({ 'left': -iw });
            now++;
            if (now >= $('#warpContent li').size()) {
                now = 0;
            }
            //新图
            $('#warpContent li').eq(now).css('left', iw);
            $('#warpContent li').eq(now).animate({ 'left': 0 });
        }
        function prev() {
            //旧图挪走，新图进入
            $('#warpContent li').eq(now).animate({ 'left': iw });
            now--;
            if (now <= -1) {
                now = $('#warpContent li').size() - 1;
            }
            //新图
            $('#warpContent li').eq(now).css('left', -iw);
            $('#warpContent li').eq(now).animate({ 'left': 0 });

        }
        //移入是停止
        $('#warpContent').hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(next, 2000);//每隔两秒切换一个图片
        });
        $('.warpPrve').hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(next, 2000);//每隔两秒切换一个图片
        });
        //点击下一个
        $('.warpPrve').click(function () {
            prev();
        });


        $('.warpNext').click(function () {
            next();
        });

    }
    chart()
    //秒杀轮播图
    function minChart() {
        var iw = $('.minChart li').eq(0).outerWidth();
        var Maxiw = $('.minChart').outerWidth();
        console.log(iw, Maxiw);
        var num = Maxiw / iw;
        minNum = 0;
        console.log(num)
        var timer = null;
        timer = setInterval(next, 2000);

        function next() {
            minNum++;
            if (minNum < 5) {
                $('.minChart').css('left', -iw * minNum);
            } else {
                $('.minChart').css('left', 0);
                minNum = 0;
            }

        }
        //移入停止
        $('.chart_cont').hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(next, 2000);//每隔两秒切换一个图片
        });
    }
    minChart();
    //每日推荐下的轮播图
    function dayChart() {
        var iw = $('#dayChart li').eq(0).outerWidth();
        // console.log(iw)
        $('#dayChart li').css('left', -iw);
        $('#dayChart li').eq(0).css('left', 0);
        //2.开启定时器自动轮播：旧图挪走，新图进入
        var timer = null;
        var now = 0;//可视区图片的下标
        timer = setInterval(next, 2000);
        function next() {
            //旧图挪走，新图进入
            $('#dayChart li').eq(now).animate({ 'left': -iw });
            now++;
            if (now >= $('#dayChart li').size()) {
                now = 0;
            }
            //新图
            $('#dayChart li').eq(now).css('left', iw);
            $('#dayChart li').eq(now).animate({ 'left': 0 });
            light()
        }
        function prev() {
            //旧图挪走，新图进入
            $('#dayChart li').eq(now).animate({ 'left': iw });
            now--;
            if (now <= -1) {
                now = $('#dayChart li').size() - 1;
            }
            //新图
            $('#dayChart li').eq(now).css('left', -iw);
            $('#dayChart li').eq(now).animate({ 'left': 0 });
            light()

        }
        $('.dt_prve').click(function () {
            prev();
            light()
        });

        $('.bt_chart').hover(function () {
            clearInterval(timer);
        }, function () {
            timer = setInterval(next, 2000);//每隔两秒切换一个图片
        });
        $('.dt_next').click(function () {
            next();
            light()
        });
        //焦点跟随
        function light() {
            $('.dtFoucs').children().eq(now).addClass('Factive').siblings().removeClass('Factive');
        }

        //点击焦点跟随
        $('.dtFoucs').on('click', 'li', function () {
            var index = $(this).index();
            if (index > now) {
                //从右边切入新图
                $('#dayChart li').eq(now).animate({ 'left': -iw }, 1000, );
                $('#dayChart li').eq(index).css('left', iw);
                $('#dayChart li').eq(index).animate({ 'left': 0 }, 1000, );
            }
            if (index < now) {
                //从左边切入新图
                $('#dayChart li').eq(now).animate({ 'left': iw }, 1000, );
                $('#dayChart li').eq(index).css('left', -iw);
                $('#dayChart li').eq(index).animate({ 'left': 0 }, 1000, );
            }
            now = index;
            light()
        });
    }
    dayChart()


    //获取cookie值
    console.log(getCookie("user"))
    if (getCookie("user")) {
        $('.dou_title').html('多商网首页');
        $('.regbtn').html('退出')
        $('.loginbtn').html("“" + getCookie("user") + "“ 欢迎您回来！");
        $('.warpRtex2').html(getCookie("user"));
        $('.wrapRreg').hide();
        $('.wrapRl').html('退出');
        $('.regbtn').click(function () {
            removeCookie('user');
            window.location.reload();
        })
    } else {
        $('.loginbtn').click(function () {
            location.href = 'html/login.html?';
        });
        $('.regbtn').click(function () {
            location.href = 'html/reg.html?';
        })
    }
    //点击退出


    $('.allfoot').load('html/footer_nav.html')
})