const countBy = (x, n) => {
    let counter = n;
    const result = [];

    for (let i = x; counter; i++) {
        if (i % x === 0) {
            counter--;
            result.push(i);
        }
    }

    return result;
};
