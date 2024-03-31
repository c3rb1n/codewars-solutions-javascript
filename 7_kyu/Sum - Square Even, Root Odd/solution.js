const sumSquareEvenRootOdd = ns =>
    +ns
        .map(num => (num % 2 === 0 ? num ** 2 : Math.sqrt(num)))
        .reduce((a, b) => a + b)
        .toFixed(2);
