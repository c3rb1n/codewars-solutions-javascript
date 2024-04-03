const vaporcode = string =>
    string.toUpperCase().split``.filter(el => el !== ' ').join`  `;
