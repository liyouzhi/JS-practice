'use strict';

function string2int(s) {

    var arr = [];
    arr = s.split("");
    arr = arr.map(function (x) {
        return ~~x;
    });
    return arr.reduce(function (x,y) {
        if (arguments.length === 1) {
        y=0;
    }
        return (10*x) + y;
    });

}

// 测试:
if (string2int('0') === 0 && string2int('12345') === 12345 && string2int('12300') === 12300) {
    if (string2int.toString().indexOf('parseInt') !== -1) {
        alert('请勿使用parseInt()!');
    } else if (string2int.toString().indexOf('Number') !== -1) {
        alert('请勿使用Number()!');
    } else {
        alert('测试通过!');
    }
}
else {
    alert('测试失败!');
}