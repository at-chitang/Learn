var Person= function (firstName) {
	this.firstName= firstName;
}

Person.prototype.sayHello = function() {
	console.log("Hello! I'm "+ this.firstName);
}

function SuperMan(firstName, lastName)
{
	this.firstName= firstName;
	this.lastName= lastName;
}

SuperMan.prototype = new Person();