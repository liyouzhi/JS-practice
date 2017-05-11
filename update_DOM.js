<!-- html结构 -->
<ol id="test-list">
    <li class="lang">scheme</li>
    <li class="lang">javascript</li>
    <li class="lang">python</li>
    <li class="lang">ruby</li>
    <li class="lang">haskell</li>
</ol>
按字符串顺序重新排序dom节点：

'use strict';

var list = document.getElementById('test-list');
var arr = [];
for (var i=0;i<list.children.length;i++) {
    arr[i] = list.children[i].innerText;
}
arr.sort();
for (var i=0;i<list.children.length;i++) {
    list.children[i].innerText = arr[i];
}
// 测试:
;(function () {
    var
        arr, i,
        t = document.getElementById('test-list');
    if (t && t.children && t.children.length === 5) {
        arr = [];
        for (i=0; i<t.children.length; i++) {
            arr.push(t.children[i].innerText);
        }
        if (arr.toString() === ['Haskell', 'JavaScript', 'Python', 'Ruby', 'Scheme'].toString()) {
            alert('测试通过!');
        }
        else {
            alert('测试失败: ' + arr.toString());
        }
    }
    else {
        alert('测试失败!');
    }
})();