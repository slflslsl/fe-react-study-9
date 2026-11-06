let money = 0;
let isHungry = true;

if ( isHungry) {
    console.log("햄버거 주문");
    money = money + 5000;
} else {
    console.log("맥플러리 주문");
    money += 2000;
}

let option = true;

if( option ) {
    console.log("패티옵션추가");
    money = money + 2000;
} else {
    console.log("옵션 추가 없음");
    // money += 0;
}

let isDiscount = true;
let coupon = 0;
let age = 15;

// if(isDiscount == false) {}
if ( !isDiscount) {  // 할인이 없으면
    console.log("할인 없음");
} else { // 할인이 되면
    // 추가적인 로직 얼마 할인이냐? 20t살 아래는 1000원 할인쿠폰 위는 500원 할인쿠폰
    if(age > 20) { // 1000원할인
        coupon = 1000;
    } else { // 500원할인
        coupon = 500;
    }

    console.log("할인 적용 됩니다.");
    // money = money - 500;
    money = money - coupon;
}

console.log("할인 적용된 금액 : " + coupon);
console.log("최종금액: " + money);