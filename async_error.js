/*
<form>
    <input id="x"> + <input id="y">
    <button id="calc" type="button">计算</button>
</form>
*/

'use strict';

var $btn = $('#calc');

// 取消已绑定的事件:
$btn.off('click');

//异步代码只能在函数内部捕获错误
$btn.click(function () {
    try {
        var
            x = parseFloat($('#x').val()),
            y = parseFloat($('#y').val()),
            r;
        if (isNaN(x) || isNaN(y)) {
            throw new Error('输入有误');
        }
        r = x + y;
        alert('计算结果：' + r);
    } catch (e) {
    alert('输入有误！');
    }
});

