const sortArray = array => {
    if (array.length) {
        const sortedEvenNumbers = array.filter(el => el % 2 === 0).sort((a, b) => b - a);
        const sortedOddNumbers = array.filter(el => el % 2 !== 0).sort((a, b) => a - b);

        return array.map(el => Number(el % 2 === 0 ? sortedEvenNumbers.splice(0, 1) : sortedOddNumbers.splice(0, 1)));
    }

    return [];
};
