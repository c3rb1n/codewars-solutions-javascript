const vowelOne = s => s.replace(/./g, el => (/[aeiou]/gi.test(el) ? 1 : 0));
