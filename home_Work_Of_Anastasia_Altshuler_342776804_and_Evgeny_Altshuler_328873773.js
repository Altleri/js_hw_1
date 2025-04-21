

//************************************************************************************************
// HOME WORK OF ANASTASIIA ALTSHULER 342776804 
// AND EVGENY ALTSHULER 328873773
/************************************************************************************************* 



/***************************************START*True Or False ***************************************/

/**************************************Task#1**************/
if ("0") //Yes its will be print because boolean "text" == true
{
  alert('Hello')
}
/************************************************************/


/******************************Task#2**********************/
//Added varable with promt for ask ftom owner to provide answer
let userAnswer = prompt("What the real name of JavaScript?")
//Added Conditions 
if (userAnswer.toLowerCase() === "ecmascript")
  alert("Correct!")
else
  alert("Don't know? It's ECMAscript")
/************************************************************/


/****************************Task#3*************************/
let score = 75;//The value from the given exercise
//Created conditional expression
let grade =
  (score >= 90 ? "A" :
    score >= 80 ? "B" :
      score >= 70 ? "C" :
        score >= 60 ? "D" : "F");

console.log("הציון הוא:" + grade);

/************************************************************/


/******************************Task#4********************/

//Added varable with promt for ask ftom owner to provide answer
const num1 = prompt("Enter number: ")
if (isNaN(num1))//Check if is real number and not a char
{
  console.log("Is not a number")//IF is not a number
} //checked if num>0 or <0 or==0
else if (Number(num1) > 0) {
  console.log(1);
} else if (Number(num1) < 0) {
  console.log(-1);
} else {
  console.log(0);
}

/************************************************************/


/******************************Task#5********************/

// let result1 = (a + b < 4) ? 'Not enough' : 'A lot';

/************************************************************/


/******************************Task#6********************/

// let message =  (login == 'Employee'?'Hello':
//                           login == 'Director'? 'Hello':
//                           login == '' ? 'No login':" ");

/************************************************************/


/******************************Task#7********************/

console.log(false || 'sdf'); // sdf
console.log(false && ' ');//false
console.log(true || ' ');//true
console.log(true && ' ');//empy char
console.log(undefined || null);//null
console.log(undefined || 0 || null); // null
console.log(undefined && 0 && null); // undefined
console.log(1 || 0) //1
console.log(null || 1) // 1
console.log(null || 0 || 1) // 1

/************************************************************/

/*******************************END TRUE OR FALSE TASKS*******************************************/


/**************************************START "Loops"*********************************************/


/******************************Task#1********************/
//i is variables which will add 1 for each cycle. sum is summory of i.
let i1 = 0, sum = 0;
while (i1 <= 100) {
  sum += i1;
  i1++;
}
console.log(sum);

/************************************************************/

/******************************Task#2*********************/

let userNum;
do {
  userNum = prompt("Please enter num: ")
} while (isNaN(userNum) || userNum <= 0)//Loop will be run while user provided not a number or number <=0

console.log(userNum);

/************************************************************/

/******************************Task#3*********************/

let num2 = 7, result2 = 0;

for (let i2 = 1; i2 <= 10; i2++) {
  result2 = num2 * i2; //multiply 7 by i from 1 to 10. Write the result
  console.log(num2 + " x " + i2 + " = " + result2);//Write the result
}

/************************************************************/


/******************************Task#4*********************/
//Added variables
let num3;
//The secret random number which  the user will have to guess
let randomNum = Math.floor(Math.random() * (10 - 1) + 1);
console.log(randomNum);

while (true) {
  num3 = prompt(" Please enter num: ")
  if (num3 == randomNum || num3 == 0) break;//if num == randomNum break the loop, if no continue
}

console.log(num3);

/************************************************************/

/******************************Task#5*********************/

for (let i3 = 1; i3 <= 30; i3++) {
  if (i3 % 3 == 0) continue;
  console.log(i3);
}

/************************************************************/


/******************************Task#6*********************/

//The last number shown is 1
//Because after that, i becomes 0, and the condition while (i) no longer passes, its false in JavaScript.
//The answer is 1
let i4 = 3;

while (i4) {
  alert(i4--);
}

/************************************************************/


/******************************Task#7*********************/
//The answer is NO. The print of first and second loop not a same.
let i5 = 0;

//This loop pring the numbers 1,2,3,4 and exit from loop. Because ++ from left side. it adds 1 before it checks the condition
while (++i5 < 5)
  console.log(i5);

//This loop print the numbers 1, 2, 3, 4, 5 and exit from loop.Because++ from right side.it adds 1 AFTER it checks the condition
while (i5++ < 5)
  console.log(i5);

/************************************************************/


/******************************Task#8*********************/

//The both loops gives same result -  0,1,2,3,4.
//The post-increment (i++) and pre-increment (++i) both increase i by 1 after each iteration, but in a for loop, this difference doesn’t matter, because the increment expression runs after the loop body.
for (let i8 = 0; i8 < 5; i8++)
  console.log(i8)

for (let i8 = 0; i8 < 5; ++i8)
  console.log(i8)

/************************************************************/

/******************************Task#9*********************/
for (let i9 = 2; i9 < 10; i9++) {
  if (i9 % 2 != 0) continue;
  console.log(i9)
}

/************************************************************/


/******************************Task#10*********************/
let i10 = 0;
while (i10 < 3) {
  alert(`number ${i10}!`)
  i10++
}

/************************************************************/

/******************************************************END LOOPS****************************/


/******************************************START SWITCH*******************************/

/*****************************Task1*************************/
let num = (prompt("Please choose the day of the week: "))
let index; //Index for print of result
let infoArray = [
  "יום ראשון - חזרה לשגרה",
  "יום שני - ישיבת צוות",
  "יום שלישי - עבודה על פרויקט",
  "יום רביעי - ספורט בערב",
  "יום חמישי - סיום משימות",
  "יום שישי - קניות לשבת",
  "שבת - מנוחה"
];

switch (num.toLowerCase()) {
  case '1':
  case "Sunday":
  case "יום ראשון":
    index = 0;
    break;

  case '2':
  case "Moday":
  case "יום שני":
    index = 1;
    break;

  case '3':
  case "Sunday":
  case "יום שלישי":
    index = 2;
    break;

  case '4':
  case "Wednesday":
  case "יום רביעי":
    index = 3;
    break;

  case '5':
  case "Thursday":
  case "יום חמישי":
    index = 4;
    break;

  case '6':
  case "Friday":
  case "יום שישי":
    index = 5;
    break;

  case '7':
  case "Saturday":
  case "יום שבת":
    index = 6;
    break;

  default:
    alert("Error")
}

if (index !== undefined) {
  alert(infoArray[index]);
}