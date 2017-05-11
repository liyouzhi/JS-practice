
// 直接创建一个student对象
var Student = {
	name: 'Robert',
	height: 1.2,
	run: function() {
		console.log(this.name+' is running...');
	}
};

// 利用函数来创建一个基于Student原型的对象
function creatStudent(name) {
	var s = Object.create(Student);
	s.name = name;
	return s;
}

//测试
var xiaoming = creatStudent('小明')；
xiaoming.run();
xiaoming._proto_ === Student; // true

// 利用构造函数来创建对象
function Student(name) {
	this.name = name;
	this.hello = function(){
		alert('Hello, '+ this.name + '!');
	};
}

// 测试
var xiaoming = new Student('小明')；
xiaoming.name;
xiaoming.hello();

function Student(name){
	this.name = name;
}

//通过Student创建的对象共用一个hello函数。注意Student.prototype是Student函数的一个具体的原型对象。
Student.prototype.hello = fucntion () {
		alert('Hello, '+ this.name + '!');
}

// 内部封装了new操作，创建基于Student函数的对象
function  creatStudent2(name){
	return new Student(name);
}

///////////////////////////原型继承//////////////////

function Student(props) {
	this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
		alert('Hello, '+ this.name + '!');
}

// PrimaryStudent的构造函数
function PrimaryStudent(props) {
	Student.call(this, props); //调用Student的构造函数，绑定this变量
	this.grade = props.grade || 60;
}

// 定义一个空函数做中间传递
function F() {
}

F.prototype = Student.prototype; // F的原型指向Student的原型
PrimaryStudent.prototype = new F(); //PrimaryStudent的原型指向一个新的F对象，
PrimaryStudent.prototype.constructor = PrimaryStudent; //把PrimaryStudent原型的构造函数修复为PrimaryStudent

// 继续在PS的原型上定义方法
PrimaryStudent.prototype.getGrade = function () {
	return this.grade;
}

var xiaoming = new PrimaryStudent({
	name : '小明'，
	grade : 2
});
xiaoming.name; //'小明''
xiaoming.grade; //2

//验证原型
xiaoming._proto_ === PrimaryStudent.prototype; // true
xiaoming._proto_._proto_ === Student.prototype; // true

//验证继承关系
xiaoming instanceof PrimaryStudent; // ture
xiaoming instanceof Student; // true

//还可以把继承这个动作封装起来，可以复用
function inherits(Child, Parent) {
	var F = function(){};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
}

//代码变成如下：
function Student(props) {
	this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
		alert('Hello, '+ this.name + '!');
}

function PrimaryStudent(props) {
	Student.call(this, props);
	this.grade = props.grade || 2;
}

inherits(PrimaryStudent, Student);

PrimaryStudent.prototype.getGrade = function () {
	return this.grade;
}
