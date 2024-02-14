const nthChar = words =>
    words.map((el, i) => el[i]).reduce((a, b) => a + b, '');
