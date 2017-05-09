//输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。

'use strict';

function normalize(arr) {

    return arr.map(function (s) {
        return s[0].toUpperCase()+s.substring(1).toLowerCase();
    });

}

// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    alert('测试通过!');
}
else {
    alert('测试失败!');
}