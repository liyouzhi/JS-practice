'use strict';

var re = /^[a-zA-Z][\w\.\_]*@\w+\.[a-zA-Z]+$/;

// 测试:
var
    i,
    success = true,
    should_pass = ['someone@gmail.com', 'bill.gates@microsoft.com', 'tom@voyager.org', 'bob2015@163.com'],
    should_fail = ['test#gmail.com', 'bill@microsoft', 'bill%gates@ms.com', '@voyager.org'];
for (i = 0; i < should_pass.length; i++) {
    if (!re.test(should_pass[i])) {
        alert('测试失败: ' + should_pass[i]);
        success = false;
        break;
    }
}
for (i = 0; i < should_fail.length; i++) {
    if (re.test(should_fail[i])) {
        alert('测试失败: ' + should_fail[i]);
        success = false;
        break;
    }
}
if (success) {
    alert('测试通过!');
}