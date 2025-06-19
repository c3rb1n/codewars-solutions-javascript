const numToText = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
};

const conv = num => {
    const numToStr = `${num}`;
    const isEvenNumLength = numToStr.length % 2 === 0;

    return [...numToStr].map((el, i) => {
        const regexp = new RegExp(numToText[el], 'g');

        if (isEvenNumLength) {
            return el % 2 === 0 ?
                numToText[el].repeat(i + 1)
                             .match(regexp)
                             .reduce((a, b, curI) => a + (curI % 2 === 0 ? b : b.toUpperCase()), '')
                             .slice(0, i + 1) : el;
        }

        return el % 2 === 0 ? el :
            numToText[el].repeat(i + 1)
                         .match(regexp)
                         .reduce((a, b, curI) => a + (curI % 2 === 0 ? b.toUpperCase() : b), '')
                         .slice(0, i + 1);
    }).join('');
};
