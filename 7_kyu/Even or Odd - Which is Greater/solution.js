const evenOrOdd = str => {
    const numbers = [...str].map(Number);
    const evensSum = numbers
        .filter(num => num % 2 === 0)
        .reduce((a, b) => a + b, 0);
    const oddsSum = numbers
        .filter(num => num % 2 !== 0)
        .reduce((a, b) => a + b, 0);

    return evensSum > oddsSum
        ? 'Even is greater than Odd'
        : evensSum < oddsSum
        ? 'Odd is greater than Even'
        : 'Even and Odd are the same';
};
