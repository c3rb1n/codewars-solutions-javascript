const findOdd = A => {
    let result = 0;

    A.forEach(el => {
        const isCountOdd = A.filter(num => num === el).length % 2 !== 0;

        if (isCountOdd) result = el;
    });

    return result;
};
