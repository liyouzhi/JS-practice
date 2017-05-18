<!-- HTML结构 -->
<div id="test-div">
    <ul>
        <li><span>JavaScript</span></li>
        <li><span>Python</span></li>
        <li><span>Swift</span></li>
    </ul>
</div>


'use strict';
var li = $('#test-div li');
var arr = li.map(function (){
    return $(this).text();
}).get().concat(['Pascal','Lua','Ruby']).sort();
li.remove();
var ul = $('#test-div ul');
for (let i in arr) {
    ul.append('<li><span>'+arr[i]+'</span></li>');
}
// 测试:
;(function () {
    var s = $('#test-div>ul>li').map(function () {
        return $(this).text();
    }).get().join(',');
    if (s === 'JavaScript,Lua,Pascal,Python,Ruby,Swift') {
        alert('测试通过!');
    } else {
        alert('测试失败: ' + s);
    }
})();