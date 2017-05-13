'use strict';
var checkRegisterForm = function () {

    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var password2 = document.getElementById('password-2');
    usernameREG = /\w{3,10}/;
    passwordREG = /.{6,10}/;

    if (!usernameREG.test(username.value)) {
        alert('用户名必须是3-10位英文字母或数字');
        return false;
    }
    if (!passwordREG.test(password.value)) {
        alert('口令必须是6-20位');
        return false;
    }
    if (password.value!=password2.value) {
        alert('两次输入口令必须一致');
        return false;
    }
    else {
        return true;
    }

}

// 测试:
;(function () {
    window.testFormHandler = checkRegisterForm;
    var form = document.getElementById('test-register');
    if (form.dispatchEvent) {
        var event = new Event('submit', {
            bubbles: true,
            cancelable: true
          });
        form.dispatchEvent(event);
    } else {
        form.fireEvent('onsubmit');
    }
})();