const score = 89;

let course = '';

if(score >= 90){
    course = 'Computer Science';
} else if(score >= 80){
    course = 'Mechanical Engineering';
} else if(score >= 70){
    course = 'Chemical Engineering';
} else if(score >= 60){
    course = 'Electronics and communication';
} else if(score >= 50){
    course = 'Civil Engineering';
} else {
    course = 'no admission'
}

console.log(`You've been offered ${course}`);