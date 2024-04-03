const magicSum = numbers =>
    numbers
        .filter(num => `${num}`.includes('3') && num % 2 !== 0)
        .reduce((a, b) => a + b, 0);
