const findAll = (array, n) => {
    const result = [];

    array.forEach((el, i) => {
        if (el === n) result.push(i);
    });

    return result;
};
