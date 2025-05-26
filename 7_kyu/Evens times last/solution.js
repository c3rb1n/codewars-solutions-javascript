const evenLast = numbers => numbers.reduce((a, b, i) => a + (i % 2 === 0 ? b : 0), 0) * (numbers.at(-1) ?? 0);
