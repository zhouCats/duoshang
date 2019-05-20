$(function () {
    $('.loadMain').load('head_nav.html')
    //滑动显示二级菜单

    $('#list_item li').hover(function () {
        // console.log($('#list_item li').index($(this)));// 滑动下标
        var liIndex = $('#list_item li').index($(this));
        $('#ts_navigation ul').eq(liIndex).show();
        $('#ts_navigation ul').hover(function () {
            $(this).show();
        }, function () {
            $(this).hide();
        })
        $(this).children("a").addClass('active').parents().siblings().children("a").removeClass('active');
        $('#ts_navigation ul').eq(liIndex).show().siblings().hide();
    }, function () {
        // $('#ts_navigation ul').css('display', 'none');
        // $('#ts_navigation ').css('height', 0);
        var liIndex = $('#list_item li').index($(this));
        $('#ts_navigation ul').eq(liIndex).hide();
    })

    //轮播图 透明度
    // console.log($('#rotation_chart li').size());
    var chartNum = 0;

    var timer = setInterval(chart, 5000);
    function chart() {
        chartNum++;
        if (chartNum > $('#rotation_chart li').size() - 1) {
            chartNum = 0;
        }
        $('#rotation_chart li').eq(chartNum).animate({ opacity: '1' }, 1000);
        $('#rotation_chart li').eq(chartNum).siblings().animate({ opacity: '0' }, 1000);
        light();
    }
    var html = '';
    $('#rotation_chart li').each(function (i, item) {
        html += '<a href="###"></a>';
    });
    $('#chart_focus').html(html);
    $('#chart_focus').children().eq(chartNum).addClass('chart_active');
    //焦点跟随
    function light() {
        $('#chart_focus').children().eq(chartNum).addClass('chart_active').siblings().removeClass('chart_active');
    }

    //点击焦点跟随
    $('#chart_focus').on('click', 'a', function () {
        var fousIndex = $(this).index();
        $('#rotation_chart li').eq(fousIndex).animate({ opacity: '1' }, 1000).siblings().animate({ opacity: '0' }, 1000);
        $('#chart_focus').children().eq(fousIndex).addClass('chart_active').siblings().removeClass('chart_active');
        clearInterval(timer);
    });

    //吸顶
    var barTop = $('#nav_height').offset().top;
    // console.log(barTop);
    $(window).on('scroll', function () {
        var scrollTop = $(document).scrollTop();
        console.log(scrollTop);
        if (scrollTop >= barTop) {
            //固定在上方
            $('#nav_height').css({ position: 'fixed', top: 0 });
            $('#nav_height').css('box-shadow', "0px 1px 5px #e3e3e3");

        } else {
            $('#nav_height').css('position', 'static');
            $('#nav_height').css('box-shadow', "none");
        }
    });

    //点击回到顶部
    $('#backtop').click(function () {

        $('body,html').animate({
            "scrollTop": 0
        }, 500)

    })

    //楼层跳跃 loor_jump
    $('#loor_jump li').click(function () {
        // console.log($(this).index()); this下标
        $(this).children().attr("class", "height_active");
        $(this).siblings().children().attr("class", " ");
        var jump = $(this).index();
        var boxHeight = $('#webget_list p').outerHeight();
        // console.log(boxHeight);
        // console.log($('#webget_list p').eq(jump).offset().top);
        var jumpHeight = $('#webget_list p').eq(jump).offset().top;
        $('body,html').animate({
            "scrollTop": jumpHeight - boxHeight
        }, 500)
    });

    //广告
    var isok = true;
    $('#posterbtn').click(function () {

        if (isok == 1) {
            $('#poster').animate({ 'right': 0 }, 1000);
            isok = 0;
        } else {
            $('#poster').animate({ 'right': -176 }, 1000);
            isok = 1;

        }
    })

    //生成节点
    // console.log($('#loor_jump li').size())
    var html2 = '';
    $.each($('#loor_jump li'), function (i, item) {
        // console.log($(item).find('a').text());
        return html2 += `<div class="list_1 listall">
                    <p>
                    <span class="listall_title">${$(item).find('a').text()}</span>
                    </p>
                    <ul class='ulGoodS'></ul>
                    </div>`;
    });
    $('#webget_list').html(html2);

    //数据渲染ajax请求
    function init(num) {
        console.log(num);
        $.ajax({
            type: 'get',
            url: '../api/goodlist.php',
            data: {
                gdsnum: 30,
                page: num,

            },
            success: function (str) {
                // console.log(str);
                var reg = JSON.parse(str);
                // console.log(reg);
                // console.log(reg[0].style);
                var pnum = $('#webget_list p').size();
                for (var z = 0; z < pnum; z++) {
                    $.each(reg, function (i, item) {
                        var golist = '';
                        if (reg[i].style == $('#webget_list p').eq(z).children().html()) {
                            golist = `<li data-id='${item.gid}'>
                                <div class="picshow">
                                    <img src="../css/img/${item.imgurl}" alt="">
                                </div>
                                <div>
                                    <a href="###" class="goods_title">${item.title}</a>
                                    <div class="goods_warp">
                                        <a href="###" class="gs_name">${item.shopname}</a>
                                        <a href="" class="sales_volume">
                                            <span class="sales">已售${item.stock}件</span>
                                        </a>
                                    </div>
                                    <div class="goods_warp">
                                        <a href="###" class="goods_price">￥${item.price}</a>
                                        <a href="###" class="upcart">立即上架</a>
                                    </div>
                                </div>
                            </li>`;
                        }
                        $('#webget_list ul').eq(z).append(golist);
                    });

                }


            }
        });
    }
    init(1);
    // var num = 0;
    // $('#btnmore').click(function () {
    //     num++;
    //     init(num);
    // })
    if (getCookie("user")) {
        $('.dou_title').html('多商网首页');
        $('.regbtn').html('退出');
        $('.loginbtn').html("“" + getCookie("user") + "“ 欢迎您回来！");
        $('.warpRtex2').html(getCookie("user"));
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

    $('.webget_list ').on('click', 'li', function () {
        console.log($(this).attr('data-id'))
        location.href = 'detail.html?' + $(this).attr('data-id');
    })

    $('.indexHtml').click(function () {
        location.href = '../duoshang.html'
    })
})