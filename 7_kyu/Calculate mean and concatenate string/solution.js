const mean = lst => [
    lst.filter(el => /\d/.test(el)).reduce((a, b) => a + +b, 0) / 10,
    lst.filter(el => /[a-z]/.test(el)).join``
];
