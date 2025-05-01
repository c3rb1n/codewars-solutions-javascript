const evenChars = string =>
    string.length > 100 || string.length < 2 ? 'invalid string' : [...string].filter((_, i) => (i + 1) % 2 === 0);
