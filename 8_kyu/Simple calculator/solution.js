const calculator = (a, b, sign) =>
    isNaN(a) || isNaN(b) || !'+-*/'.includes(sign) ? 'unknown value' : eval(`${a} ${sign} ${b}`);
