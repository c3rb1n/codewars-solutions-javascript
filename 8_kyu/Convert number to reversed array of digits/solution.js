const digitize = n =>
    Array.from(`${n}`)
        .reverse()
        .map(num => +num);
