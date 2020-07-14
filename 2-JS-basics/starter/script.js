// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);

// var firstName = 'John';
// var age = 28;

// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var heightInMeterMark = 1.8;
var heightInMeterJohn = 2;

var massInKilogramsMark = 81;
var massInKilogramsJohn = 74;

var bmiMark = massInKilogramsMark / (heightInMeterMark * heightInMeterMark);
var bmiJohn = massInKilogramsJohn / (heightInMeterJohn * heightInMeterJohn);

var markHasHighestBmi = false;

if(bmiMark > bmiJohn){
    markHasHighestBmi = true;
} else {
    markHasHighestBmi = false;
}

console.log('Is marks BMI higher then Johns? ' + markHasHighestBmi);