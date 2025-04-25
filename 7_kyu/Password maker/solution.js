const makePassword = phrase =>
    phrase.split` `
        .map(el => el[0])
        .reduce((a, b) => a + (/i/i.test(b) ? 1 : /o/i.test(b) ? 0 : /s/i.test(b) ? 5 : b), '');
