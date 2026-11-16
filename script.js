// Task A: Student Information and Variables (5 marks)

let studentFullName = "Yusuf Pane";

let studentAge = null;

let registered = true;
let notRegistered = false;
let studentStatus = (registered) => (registered === true);

let department ;

let scores = [
    {subject: "html", score: 85},
    {subject: "css", score: 80},
    {subject: "javaScript", score: 50}
    ]

let totalFee = 200000;
let feePaid = 100000;
let outstandingFee = (totalFee - feePaid);

let totalDays = 30;
let attendedDays = 28;
let attendancePercentage = (attendedDays / totalDays) * 100;


console.log(studentFullName)
console.log(studentAge)
console.log(studentStatus(registered));
console.log(department)
console.log(scores)
console.log(attendancePercentage + "%")
console.log(outstandingFee)

// scores.forEach(function(Item) {
// console.log(Item.subject + ":" + Item.score);});


// Task B: Data Type Investigation (8 marks)

console.log("15" + 5);
console.log("15" * 2);
console.log(10 + true);
console.log("10" === 10);
console.log(typeof NaN);
console.log(Boolean(""));
console.log("15" - 5);
console.log("15" / 3);
console.log("10" == 10);
console.log(typeof null);
console.log(Boolean("false"));


// Task C: Data Validation and Type Coercion (8 marks)

let age = "19";
let result = Number(age);
let htmlScore = "75";
let cssScore = "eighty";
let javascriptScore = 85;



console.log(result);

let outcome = Number(htmlScore);
console.log(outcome);

let answer = Number(cssScore);
console.log(answer);

let effect = Number(javascriptScore);
console.log(effect);


// Task D: Examination Eligibility (8 marks)

console.log(age >= 18);
console.log(studentStatus == registered);
console.log(feePaid <= totalFee);
console.log(attendancePercentage >= 75);


// Task E: Score Processing and Grading (8 marks)

let html = 85;
let css = 80;
let javaScript = 50;
let totalScore = (html + css + javaScript);
let totalSubjects = 3;
let averageScore = (html + css + javaScript) / 3;

console.log(totalScore);
console.log(html > 0, html < 100);
console.log(css > 0, css < 100);
console.log(javaScript > 0, javaScript < 100);
console.log(averageScore);


// const day = 3;
// let name;
// switch(day){
//     case 1: name = "Sunday"; break;
//     case 2: name = "Monday"; break;
//     case 3: name = "Tuesday"; break;
//     case 4: name = "Wednesday"; break;
//     defaul: name = "unknown";
// }
// console.log(name)

const day = 3;
let name;
if (day ===1){
    name = "Sunday"
}
else if (day ===2){
    name = "Monday"
}
else if (day ===3){
    name = "Tuesday"
}
console.log(name)





// if (averageScore >= 75) {
//     console.log("Grade A")
// }
// else if (averageScore > 60 || averageScore <= 70){
//     console.log("Grade B")
// }
// else (averageScore < 35) {
//     console.log("Grade F")
// }



// let agess = 18;
// if (agess >= 16){
//     console.log("eligible")
// }
// else {
//     console.log("not eligible")
// }