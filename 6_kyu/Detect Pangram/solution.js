const isPangram = string =>
    [...new Set(string.toLowerCase().match(/[a-z]/g).sort())].join('') === 'abcdefghijklmnopqrstuvwxyz';
