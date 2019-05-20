$(function () {

    var locationUrl = getCookie("user");

    $('.username').html(locationUrl);
    function init() {
        // console.log(locationUrl);
        $.ajax({
            type: 'get',
            url: '../api/cart.php',
            data: {
                userId: locationUrl,
            },
            success: function (str) {
                var arr = JSON.parse(str);
                var html = arr.map(function (item) {
                    return `<div class="storeBox" data-id='${item.Gid}'>
                                <div class="storeImg" data-id='${item.id}'>
                                    <input type="checkbox" class='aaa'>
                                    <img src="${item.Gimg}" alt="" class="boxImg">
                                    <div>
                                        <p>${item.Gtitle}</p>
                                    </div>
                                </div>
                                <div class="store_btn">
                                    <div>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>${item.Gcolor}</td>
                                                    <td>均码</td>
                                                    <td class="btn_num">
                                                        <a href="###" class="jian">-</a>
                                                        <input type="text" value="${item.Gnum}" class="number">
                                                        <a href="###" class="add">+</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="storeP">
                                    <p>
                                        <span>￥${item.Gprice}</span>
                                        <del>原价：￥125.00</del>
                                    </p>
                                    <p>
                                        <a href="###" class='anum'>${item.Gnum}</a>
                                    </p>
                                    <p>
                                        <i >
                                            ￥<a class='inputC'>${item.Gnum * item.Gprice}</a>
                                        </i>
                                    </p>
                                    <p class="delshop">
                                        <img src="../img/dsImg_56.jpg" alt="">
                                    </p>
                                </div>
                            </div>`;
                }).join('');
                $('.freightcar li').html(html);
                var arr = [];
                function all() {
                    arr = [];//存被勾选的复选框的下标
                    $('.aaa').each(function (i, item) {
                        if ($(item).prop('checked')) {
                            //被勾选了，把下标存起来
                            arr.push(i);
                            console.log(i)
                        }
                    });

                    //总数量
                    var num = 0;
                    //总价格
                    var price = 0;

                    arr.forEach(function (item) {
                        num += $('.anum').eq(item).text() * 1;
                        price += $('.inputC').eq(item).text() * 1;
                    });

                    console.log(num, price);

                    //渲染到节点
                    $('.shopNum').html(num);
                    $('.totalN').html(price);

                }
                $('.storeBox').on('click', '.aaa', function () {
                    all()
                })
                //全选
                $('.allC').click(function () {
                    var istrue = $('.allC').prop('checked');
                    $('.aaa').prop('checked', istrue);
                    all();
                });

                //点击复选框反过来控制全选按钮
                $('.freightcar').on('click', '.aaa', function () {
                    var len = $('.aaa:checked').size();
                    var total = $('.aaa').size();
                    if (len == total) {
                        //全都勾选了
                        $('.allC').prop('checked', true);
                    } else {
                        $('.allC').prop('checked', false);
                    }
                    all();//刷新总数量和总价格
                });

                //删除单行
                $('.storeBox').on('click', '.delshop', function () {
                    var res = confirm('您确认要删除吗？');
                    if (res) {
                        $(this).parent().parent().remove();
                    }
                });

                //手动输入的时候，改变数量
                $('.storeBox').on('input', '.number', function () {
                    var num = $(this).val();
                    var kuncun = 444;
                    if (num <= 1) {
                        num = 1;
                    } else if (num >= kuncun) {
                        num = kuncun;
                    }
                    $(this).val(num);
                    //刷新小计
                    var numId = parseInt($(this).parent().parent().parent().parent().parent().parent().prev().attr('data-id'));
                    change(num, numId)
                });

                //全删
                $('#delall').click(function () {
                    var res = confirm('您确定要删除全部吗');
                    if (res) {
                        console.log(arr);
                        for (var i = arr.length - 1; i >= 0; i--) {//从数组的尾部开始删除
                            $('.storeBox').eq(arr[i]).remove();
                        }
                        all();//刷新总数量和总价格
                    }
                    //		
                });
            }
        })


    }
    init()

    $('.freightcar li').on('click', '.jian', function () {
        var num = $(this).next().val();
        var numId = parseInt($(this).parent().parent().parent().parent().parent().parent().prev().attr('data-id'));
        // console.log(numId);
        // console.log($(this).parent().parent().parent().parent().parent().parent().parent().attr('data-id'));
        num--;
        if (num > 0) {
            $(this).next().val(num);
            // window.location.reload()
            change(num, numId);
        } else {
            alert('商品数量不能小于1')
        }

    })
    $('.freightcar li').on('click', '.add', function () {
        var numId = parseInt($(this).parent().parent().parent().parent().parent().parent().prev().attr('data-id'));
        var num = $(this).prev().val();
        num++;
        if (num <= 150) {
            $(this).prev().val(num);
            change(num, numId);
        } else {
            alert('商品数量不能大于15')
        }
    })

    function change(num, numId) {
        $.ajax({
            type: 'get',
            url: '../api/change.php',
            data: {
                nums: num,
                numIds: numId,
            },
            success: function (str) {
                if (str == 1) {
                    init()
                }
            }
        })
    }
    //商品勾选
    $('.exit').click(function () {
        removeCookie('user');
        location.href = "list.html";
    })






    $('.allFooter').load('footer_nav.html');
});
