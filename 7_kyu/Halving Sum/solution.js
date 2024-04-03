const halvingSum = n => (n === 1 ? n : n + halvingSum(Math.floor(n / 2)));
