const positiveSum = arr =>
    arr.filter(num => num > 0).reduce((a, b) => a + b, 0);
