var john = {
    fullName: 'John',
    mass: 80,
    height: 1.80,
    bmi: function() {
        return this.mass / (this.height * this.height);
    }
}

var Mark = {
    fullName: 'Mark',
    mass: 70,
    height: 1.62,
    bmi: function() {
        return this.mass / (this.height * this.height);
    }
}

if (john.bmi > Mark.bmi) {
    console.log(john.fullName + ' has the Highest BMI with a score of: ' + john.bmi);
} else {
    console.log(Mark.fullName + ' has the Highest BMI with a score of: ' + Mark.bmi);
}

