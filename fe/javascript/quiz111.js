//oper02.js
//1. 문제 1번
const userName = "홍길동";
let userAge = 25;
const userHeight = 175.5;
const isStudent = true;
const userHome = "서울";

console.log("이름: " + userName );
console.log("나이: " + userAge );
console.log("키: " + userHeight );
console.log("학생 여부: " + isStudent );
console.log("거주 지역: " + userHome );

//2. 문제 2번
let price = 1000;
let quantity = 5;
const productName = "사과";

console.log(price);
console.log(quantity);
console.log(productName);

price = 1500;
quantity = 10;

console.log(price);
console.log(quantity);

// productName = "머리아프다";
// console.log(productName);
/*----- 문제 2번에 대한 답
 5.productName을 다른 값으로 변경하면 어떻게 되는지 확인하고 이유를 설명하세요. 
 답 : const라서 변경이 안 되는 탓에 오류를 뱉음
*/

// 문제 3번
let a = 10;
let b = 20;
let c;

console.log(a);
console.log(b);
console.log(c);

a = 100;
b = a;

console.log(a);
console.log(b);
/* ---------- 문제 3번에 대한 답
1. console.log()가 출력하는 값을 순서대로 작성하세요.
답:
10
20
undefined
100
100
3. 처음에 10이었던 let변수의 값을, 
아래에서 a에 100으로 변경해서 담아서 
a의 값은 100으로 변경이 되었고, 
그 100이란 a의 값을 b에 담아서 b는 100이 된 것임
4. let c; 값을 안 주고 ;로 끝내서
*/

// 문제 4번
// let 1name = "김철수";
// let user age = 30;
// let user-name = "이영희";
// let const = 100;
// let my_score = 95;
// let $price = 5000;
// let _count = 10;

/* ======= 문제 4번에 대한 답
1. 잘못된 변수명을 찾아보세요.
답: 1name에서 1
답: user age에서 띄어쓰기
답: user-name에서 -
답: let이랑 const랑 같이 쓴 것도 문제고 const자리가 아니라 내가 지어줄 변수 이름 자리임
답: O
답: O
답: O
*/

let name1 = "김철수";
let uuAge = 30;
let uuName = "이영희";
let constVariable = 100;
let my_score = 95;
let $price = 5000;
let _count = 10;

console.log(name1);
console.log(uuAge);
console.log(uuName);
console.log(constVariable);
console.log(my_score);
console.log($price);
console.log(_count);