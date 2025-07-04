const stringExpansion = s => s.match(/\d*[a-z]+/gi)?.map(string => {
    const resultStringRepeatNumber = string.match(/\d(?=[a-z])/i)?.at(-1) ?? 1;
    const resultString = string.match(/[a-z]+/i)[0].replace(/[a-z]/gi, el => el.repeat(resultStringRepeatNumber));

    return resultString;
}).join('') ?? '';
