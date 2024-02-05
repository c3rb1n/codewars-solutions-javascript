const sumCubes = n =>
    Array.from({length: n})
        .map((_, i) => (i + 1) ** 3)
        .reduce((a, b) => a + b);
