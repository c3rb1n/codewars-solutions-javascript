const printNums = (...args) =>
    args.reduce(
        (a, b, i) => a + `${i > 0 ? '\n' : ''}${'0'.repeat(`${Math.max(...args)}`.length - `${b}`.length)}${b}`,
        ''
    );
