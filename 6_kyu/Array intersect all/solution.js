const intersect = (...arrays) => {
    const result = [];

    if (arrays.length) {
        arrays[0].forEach(curArr0El => {
            if (arrays.every(arr => arr.includes(curArr0El))) {
                result.push(curArr0El);
            }
        });
    }

    return result;
};
