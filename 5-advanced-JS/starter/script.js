/*
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
*/
/*
var personProto = {
    calculateAge: function() {
        console.log(2016 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'john';
john.yearOfBirth = '1990';
john.job = 'teacher';

var jane = Object.create(personProto, 
{
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer'}
})
*/
/*
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'john',
    age: 26
};
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age)
console.log(obj2.age)


var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);
*/

var years = [1990, 1956, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

var ages = arrayCalc(years, calculateAge);

var fullAges = arrayCalc(years, isFullAge);

console.log(ages);
console.log(fullAges);