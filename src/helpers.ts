export const formatMoney = (money: number,) => '$' + money.toString().split('',)
    .map((char, i, arr,) => ((arr.length - i - 1) % 3 === 0 && i !== arr.length - 1) ? char + ',' : char,)
    .join('',);
