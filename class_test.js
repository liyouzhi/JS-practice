
class Student {
	constructor(name) {
		this.name = name;
	}

	hello() {
		alert('Hello, '+ this.name + '!');
	}
}

class PrimaryStudent extends Student {
	constructor(name,grade) {
		super(name);
		this.grade = grade;
	}
	getGrade() {
		return this.grade;
	}
}
