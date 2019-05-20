$(function () {
    $('.headall').load('head_nav.html');
    //截取url问号后面的数值
    var locationUrl = location.search.substring(1);
    // console.log(locationUrl);

    $.ajax({
        type: 'get',
        url: '../api/detail.php',
        data: {
            Uid: locationUrl,
        },
        success: function (str) {
            // console.log(str)
            var res = JSON.parse(str);
            console.log(res)
            $('.MagTargetImg').attr('src', "../css/img/" + res[0].imgurl).attr('data-src', "../css/img/" + res[0].imgurl);
            $arr = res[0].color.split('&');
            $arrI = res[0].allimg.split('&');
            var htmlI = '';
            $.each($arrI, function (i, item) {
                htmlI += `<li>
                <img src="../css/img/${item}" data-lsrc="../css/img/${item}" data-maxSrc="../css/img/${item}">
            </li>`;
            });
            var html = '';
            $.each($arr, function (i, item) {
                html += `<span>${item}</span>`;
            });
            $('.allimg').html(htmlI);
            $('#colorInt').html(html);
            $('.idNum').html(res[0].itemnum);
            $('.company').html(res[0].shopname);
            $('.sales').html(res[0].sales);
            $('.price').html(res[0].price);
            $('.shopTitle h1').html(res[0].title)

            $('.shopNum').blur(function () {
                var shop = $('.shopNum').val()
                $('.jianNum').click(function () {
                    // console.log($('.shopNum').val())
                    shop--;

                    $('.shopNum').val(shop)
                    if (shop <= 1) {
                        $('.jianNum').css('cursor', 'no-drop');
                        $('.shopNum').val(1)
                    }

                });
                $('.addNum').click(function () {
                    shop++;
                    $('.shopNum').val(shop);
                    if (shop >= res[0].sales) {
                        $('.shopNum').val(res[0].sales)
                        $('.addNum').css('cursor', 'no-drop');
                    }
                });

                $('.count').html(shop)

            })
            var shop = $('.shopNum').val()
            //点击减减
            $('.jianNum').click(function () {
                // console.log($('.shopNum').val())
                shop--;

                $('.shopNum').val(shop);
                if (shop <= 1) {
                    $('.jianNum').css('cursor', 'no-drop');
                    shop = 1;
                    $('.shopNum').val(1);
                };
                $('.count').html(shop);
                $('.total').html(shop * res[0].price);
            });

            //点击加加
            $('.addNum').click(function () {
                shop++;
                $('.shopNum').val(shop);
                if (shop >= res[0].sales) {
                    $('.addNum').css('cursor', 'no-drop');
                    $('.shopNum').val(res[0].sales)
                };
                $('.count').html(shop);
                $('.total').html(shop * res[0].price);
            });

        }
    })
    $('#colorInt').on('click', 'span', function () {
        $(this).addClass('addActive').siblings().removeClass('addActive');
    })
    $('.addp1').click(function () {
        // console.log(getCookie("user"));
        // console.log($('.count').text())
        // console.log($('.addActive').text())
        // console.log(locationUrl)
        // console.log(getCookie("user"))
        // console.log($('.price').text())
        // console.log($('.MagTargetImg').attr('src'))
        // console.log($('.shopTitle h1').text())
        if ($('.addActive').text()) {
            if ($('.shopNum').val() == 0) {
                alert('请选择数量!');
            } else {
                $.ajax({
                    type: 'post',
                    url: '../api/orders.php',
                    data: {
                        shopNum: $('.count').text(),
                        shopColor: $('.addActive').text(),
                        shopId: locationUrl,
                        userIds: getCookie("user"),
                        shopP: $('.price').text(),
                        shopImg: $('.MagTargetImg').attr('src'),
                        shopTitle: $('.shopTitle h1').text(),
                    },
                    success: function (str) {
                        console.log(str);
                        if (str == 'yes') {
                            location.href = 'cart.html?' + getCookie("user");
                        } else {
                            alert('请先登陆')
                        }

                    }
                });
            }

            // console.log($('.count').text()) //商品数量
            // console.log($('.addActive').text()) //商品颜色
            // console.log(locationUrl); // 商品id
            // console.log(getCookie("user")); user id


        } else {
            alert('请选择颜色');
        }

        // console.log($('#colorInt span').hasClass('addActive'));
    });

    //分页加载<    >控制页数
    function pages(pages) {
        $.ajax({
            type: 'get',
            url: '../api/jiazai.php',
            data: {
                page: pages,
                num: 4,
            },
            success: function (str) {
                var res = JSON.parse(str);
                console.log(res);
                var html = res.map(function (item) {
                    return ` <li>
                    <a href="###">
                        <img src="../css/img/${item.imgurl}" alt="">
                    </a>
                    <span>￥${item.price}</span>
                </li>`;
                }).join('');

                $('.lanjiazai').html(html);
            }
        })
    }
    pages()
    var num = 1;
    $('.nextPage').click(function () {
        num++;
        pages(num);
    })
    $('.prevPage').click(function () {
        num--;
        if (num <= 1) {
            num = 1
            pages(num);
        }
        pages(num);
    })
    $('.footall').load('footer_nav.html');

})