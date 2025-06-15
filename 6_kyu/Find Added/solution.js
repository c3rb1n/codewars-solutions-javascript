const findAdded = (st1, st2) => {
    let result = st2;

    [...st1].forEach(el => {
        result = result.replace(el, '');
    });

    return [...result].sort().join('');
};
