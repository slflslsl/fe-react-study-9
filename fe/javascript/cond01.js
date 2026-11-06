// 조건문 if문

//if 만약에~

// if (조건식) { 실행할 코드} -> 조건식이 참(true)면 실행하겠다.

let num = 15; // 전역변수

if(num > 5) {
    console.log('num이 5보다 크다')
    console.log('if문 {} 안의 코드 실행');
}

if(num >= 10) {
    console.log('num이 10보다 크거나 같다');
}

// 2,3은 출력이 된다 (이 상황에선 무조건 실행되는 구조) 바로 아랫줄만 종속됨 괄호 없으면.
if( num == 10)
    console.log('num이 10이 같다');
    console.log('num이 10과 다르다2');
    console.log('num이 10과 다르다3');

console.log(num);
//---------------------------------------------
let x = 3; // 전역변수

if( num > 0 ) {
    console.log('num이 0보다 크다');

    // {} 영역은 인식되는 지역을 구분
    let x = 10;
    console.log(x);
    x = 50;
    console.log(x);

    let y = 33;
    y = y + 7;

    console.log(y);
} 

// console.log(x); // 괄호 밖에 존재하는 x의 값을 출력
// console.log(y); // 괄호안에만 존재하고 괄호 벗어나면 사라지는 값이라 출력 안 됨
// // ----------------------------

// if(조건식 <- 결과가 ture false ) {}

x =3;
let b1 = ( x < 10);

if( x < 10 ) {
    console.log("111");
}

if( b1 == true) {
    console.log("222");
}

if(b1) {
    console.log("333");
}

/*
// 택시 탑승 여부를 비교
if ( 늦게 일어났나? &&  버스가 배차가 먼가? && 내가 다리를 다쳤나? ){}

let 택시탑승여부 = 늦게 일어났나? &&  버스가 배차가 먼가? && 내가 다리를 다쳤나?
if ( 택시탑승여부 ) {}
*/

// if else

let z = 10;
if(z > 10) {
    console.log( 'z가 10보다 크다.');
} else {
    console.log('z가 10보다 크지 않다.')// z가 10이거나 10보다 작다. (10이랑 같은 것도 10보다 큰 게 아니니)
}