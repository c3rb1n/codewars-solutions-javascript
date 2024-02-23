const nothingSpecial = str =>
    typeof str === 'string' ? str.replace(/[^a-z\d\s]/gi, '') : 'Not a string!';
