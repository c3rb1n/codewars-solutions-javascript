const solve = arr => {
    const arrCopy = [...arr];
    const result = [];

    arr.forEach((_, i) => {
        const nextNumberIndex = arrCopy.indexOf(i % 2 === 0 ? Math.max(...arrCopy) : Math.min(...arrCopy));

        result.push(...arrCopy.splice(nextNumberIndex, 1));
    });

    return result;
};
