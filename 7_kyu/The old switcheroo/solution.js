const vowel2index = str =>
    str.split``.map((el, i) => (/[aeouiAEOUI]/.test(el) ? i + 1 : el)).join``;
