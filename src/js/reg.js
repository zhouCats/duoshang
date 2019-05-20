$(function () {

    //验证码
    var delayFlag1 = false;
    var delayFlag2 = false;
    var delayFlag3 = false;
    var delayFlag4 = false;
    $('#regcode').html(randomCode());
    $('#regcode').css('color', randomColor(16));
    $('#regInit').click(function () {
        $('#regcode').html(randomCode());
        $('#regcode').css('color', randomColor(16));
    })
    //手机号码验证
    $('#userTel').blur(function () {
        var userTel = $.trim($('#userTel').val());
        $.ajax({
            type: 'get',
            url: '../api/userInf.php',
            data: {
                isphone: $.trim($('#userTel').val()),
            },
            success: function (str) {
                console.log(str);
                if (str == 'yes') {
                    $('#telmeg').html('该用户已被注册').css('color', 'red');
                } else {

                    if (!(/^13[0-9]{9}$|14[0-9]{9}$|15[0-9]{9}$|17[0-9]{9}$|18[0-9]{9}$|16[0-9]{9}$|19[0-9]{9}$/.test(userTel))) {
                        $('#telmeg').html('请输入正确手机格式！').css('color', 'red');
                        delayFlag1 = false;

                    } else {
                        $('#telmeg').html('该用户可以使用').css('color', 'green');
                        //发送ajax请求查询是否存在
                        delayFlag1 = true;
                    }
                }
            }
        });
        //手机号码正则去空

    })
    //密码验证
    $('#regpwd').blur(function () {

        var reg = /^\S{8,20}$/;
        if (reg.test($('#regpwd').val())) {
            // console.log($('#regpwd').val());
            $(this).next().html('设置成功').css('color', 'green');
            delayFlag2 = true;
        } else {
            $(this).next().html('密码只能由8-20个字母、数字、或符号组成').css('color', 'red');
            delayFlag2 = false;

        }
    });
    //密码可见与否
    $('.pwdShow').click(function () {
        $(this).children().toggleClass('visibles');
        console.log($('.pwdShow').children().attr('class'))
        if ($('.pwdShow').children().attr('class')) {
            $('#regpwd').attr('type', 'text');

        } else {
            $('#regpwd').attr('type', 'password');
        }
    })
    //验证码验证
    $('#codetext').blur(function () {
        // console.log($('#regcode').text().toLowerCase())
        // console.log($(this).val())
        if ($('#regcode').text().toLowerCase() == $("#codetext").val().toLowerCase()) {
            $('#yzmCode').html('输入正确').css('color', 'green');
            return delayFlag3 = true;
        } else {
            $('#yzmCode').html('验证码错误').css('color', 'red');
            return delayFlag3 = false;
        }
    });



    //短信验证
    $('#smsv').blur(function () {
        if ($('#smsv').val() == $('#telcode').text()) {
            return delayFlag3 = true;
        } else {
        }
    });

    //点击发送验证码
    $('#telcode').click(function () {

        if (delayFlag1 == delayFlag2 == delayFlag3) {
            // alert('aaa');发送短信请求
            $.ajax({
                type: "post",
                data: {
                    userphone: $.trim($('#userTel').val()),//换成你的号码即可
                },
                url: "../api/phone.php",
                async: true,
                success: function (str) {
                    timer = setInterval(countDown, 1000);
                    var res = JSON.parse(str);
                    console.log(res.phonecode);
                    if (res.phonecode) {
                        return delayFlag4 = true;
                        if ($('#smsv').val() == res.phonecode) {
                            return delayFlag4 = true;
                            console.log($('#smsv').val() == res.phonecode);

                        }
                    } else {
                        return delayFlag4 = true;
                        // return delayFlag4 = false;记得还回来！！！

                    }
                }
            });
        } else {
            alert('信息不完整');
        }
    });
    var timer = null;
    var codeNum = 60;
    function countDown() {

        if (codeNum <= 60) {
            codeNum--;
            $("#telcode").html(codeNum + '秒后重新获取');
            $('.zhezhao').css('display', 'block')
            if (codeNum <= 0) {
                codeNum = 60;
                $("#telcode").html("点击获取验证码");
                clearInterval(timer);
                $('.zhezhao').css('display', 'none');
            }
        }
    }
    //点击事件
    $('.next_btn a').click(function () {
        console.log(delayFlag1, delayFlag2, delayFlag3, delayFlag4)
        console.log($("#regcode").text())
        if (delayFlag1 && delayFlag2 && delayFlag3 && delayFlag4) {
            //如果为true发送ajax请求
            var anum = $.trim($('#userTel').val());
            var bnum = $.trim($('#regpwd').val());
            console.log(123)
            $.ajax({
                type: 'post',
                url: '../api/userSet.php',
                data: {
                    userphone: anum,
                    userpwd: bnum
                },
                async: true,
                success: function (str1) {
                    // console.log(str1);
                    if (str1 == 1) {
                        location.href = 'login.html?';
                    }
                }
            })
        } else {
            alert('请完善信息')
        }
    })
})
