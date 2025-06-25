const findUniq = arr => {
    const uniqueElems = [...new Set(arr)];

    return arr.indexOf(uniqueElems[0]) === arr.lastIndexOf(uniqueElems[0]) ? uniqueElems[0] : uniqueElems[1];
};
