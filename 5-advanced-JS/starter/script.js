var john = {
    name: 'John',
    yearOfBith: 1990,
    job: 'teacher'
}

var Person = function(name, yearOfBith, job) {
    this.name = name;
    this.yearOfBith = yearOfBith;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2016 - this.yearOfBith);
} 

Person.prototype.lastName = 'Smith';

var john = new Person('john', 1990, 'teacher');
var Jane = new Person('Jane', 1969, 'designer');
var Mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
Jane.calculateAge();
Mark.calculateAge();

console.log(john.lastName);
console.log(Jane.lastName);
console.log(Mark.lastName);