// operator 연산자

let x = 10;
let y = 20;
let z = '30';

console.log(x);
console.log( x+10 );
console.log( x+y);
console.log( x - y);
console.log( x * y);
console.log( x / y);
console.log( 10 % 4);
console.log( 2 ** 3 );

console.log( x + x + y + y);

console.log(x);
// let x = 20;
x = 20;
console.log(x);

x = x - 5;
console.log(x);
//x = x + x * x - y + y
//3 + 5 * 2 = 13
// x = 3 + (5 * 2) = 13
// x = (3 + 5) * 2 = 16

//문자가 포함된 + 연산 : 문자형태로 이어붙이기
console.log(x + y + z);
//          15  20 '30'
        //    35 + '30' => '3530'
console.log(z + x + y);
//         '30' 15  20 => '301520'

// ------------------- 
let q = 10;

// ++ -- -
console.log(-10);
console.log(-q);
// ++ --     +1 -1
// ++q    q++     --q      q--
// + or - 를 먼저 하느냐 나중에 하느냐
// 변수원본 값이 변경됨

console.log(q);
console.log( q + 5);
console.log (q);

console.log(q);
q = q + 5;
console.log (q );

// q++ 
// q = q + 1

q++;
console.log(q);
q--;
console.log(q);
//q = 15
console.log( q++ + 10 );
//           15 + 10 = 25
// q = 16
console.log( q );
// q  = 16
console.log( ++q + 10 );
//             17 + 10 = 27
//            q=17
console.log( q );
//           17

let w = 5;
//q = 17
console.log(w); // 5
w = ++q - w; // 18 - 5 = 13
console.log(w); //13 
console.log(w);
console.log(q);

let x = 10;

x = x + 10;
x = x - 5;
x = x / 3;

// 복합대입연산자
x += 10;
x -= 5;
x /= 3;
// *=
// %=

// 비교연산자

// = : 대입연산자
// == : 같은가?
// != : 다른가?
// > < >= <=

x = 10;
let y = 10;
let z = '10';

console.log( x ==y );