$(function () {
    //随机生成四位验证码

    $('#numB').html(randomCode());
    $('#numB').css('color', randomColor(16));
    $('#numB').click(function () {
        $('#numB').html(randomCode());
        $('#numB').css('color', randomColor(16));
    })
    //切换登录方式
    $('#passLogin').click(function () {
        // $('#login_from').attr('value', '1');
        $(this).addClass('is_select');
        $('#telLogin').removeClass('is_select');
        // $('#tel_input input').css('display', 'none');
        // $('#pass_input input').css('display', 'block');
        // $('#vfcode').hide();
        $('#tel_input').hide();
        $('#pass_input').show();
        $('#login_from').children("div").eq(0).attr('value', 1);
    })
    $('#telLogin').click(function () {
        // $('#tel_input input').css('display', 'block');
        // $('#pass_input input').css('display', 'none');
        $(this).addClass('is_select');
        $('#passLogin').removeClass('is_select');
        // $('#login_from').attr('value', '2');
        // $('#vfcode').show();
        $('#tel_input').show();
        $('#login_from').children("div").eq(0).attr('value', 0);
        $('#pass_input').hide();
    })
    //点击发送短信验证码
    var phoneN = null;
    $('#vfcode').click(function () {
        console.log($.trim($('#usertel').val()));
        $.ajax({
            type: 'get',
            url: '../api/userInf.php',
            data: {
                isphone: $.trim($('#usertel').val()),
            },
            success: function (str) {
                if (str == 'yes') {
                    $.ajax({
                        type: "post",
                        data: {
                            userphone: $.trim($('#usertel').val()),//换成你的号码即可
                        },
                        url: "../api/phone.php",
                        async: true,
                        success: function (str) {
                            timer = setInterval(countDown, 1000);
                            var res = JSON.parse(str);
                            console.log(res.phonecode);
                            phoneN = res.phonecode;
                            // if (res.phonecode) {
                            //     if ($('#smsv').val() == res.phonecode) {
                            //         console.log($('#smsv').val() == res.phonecode);

                            //     }
                            // } else {
                            //     // return delayFlag4 = false;记得还回来！！！

                            // }
                        }
                    });
                }
            }
        });

        var timer = null;
        var codeNum = 60;
        function countDown() {

            if (codeNum <= 60) {
                codeNum--;
                $("#vfcode").html(codeNum + '秒后重新获取');
                $('.zhezhao').css('display', 'block')
                if (codeNum <= 0) {
                    codeNum = 60;
                    $("#vfcode").html("点击获取验证码");
                    clearInterval(timer);
                    $('.zhezhao').css('display', 'none');
                }
            }
        }
    })

    //点击验证
    $('#input_submit').click(function () {
        // console.log($('#login_from').attr('value'))
        // console.log($('#numB').text().toLowerCase());
        var userName = $('#username').val();
        var userPwd = $('#userpwd').val();
        // console.log($('#ranNum').val().toLowerCase());
        var about = $('#login_from').children("div").eq(0).attr('value');
        console.log(about)
        if (about == 1) {
            if (userName && userPwd) {//如果为1则是账户验证
                if ($('#numB').text().toLowerCase() == $('#ranNum').val().toLowerCase()) {//判断如果验证码相同
                    $.ajax({
                        type: 'post',
                        url: '../api/login.php',
                        data: {
                            username: $.trim($('#username').val()),
                            userpwd: $.trim($('#userpwd').val()),
                        },
                        success: function (str) {
                            if (str == 'yes') {//如果返回为yes 则说明用户存在 通过登陆
                                location.href = '../duoshang.html?' + userName;
                                setCookie("user", userName);
                            } else {
                                alert('用户信息错误')
                            }
                        }
                    });
                } else {
                    alert('请填写正确信息');
                }
            } else {//其它则是手机短信验证
                //1 验证手机号码是否存在 存在则发送短信 不存在则提示未注册
            }

        } else {
            // console.log(phoneN);
            if (phoneN == $('#usercode').val()) {
                if ($('#ranNum').val().toLowerCase() == $('#numB').text().toLowerCase()) {
                    // console.log('登陆成功');
                    location.href = '../duoshang.html?' + $.trim($('#usertel').val());
                } else {
                    alert('验证码错误')
                }
            } else {
                alert('短信验证码错误');
            }
        }

    })

});