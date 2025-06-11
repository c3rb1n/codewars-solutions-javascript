const sortme = names => names.sort((a, b) => {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();
    const aOrderIndex = lowerA > lowerB ? 1 : -1;

    return lowerA === lowerB ? 1 : aOrderIndex;
});
