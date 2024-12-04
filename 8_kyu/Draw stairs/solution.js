const drawStairs = n => Array.from({length: n}).map((_, i) => `${' '.repeat(i)}I${n - 1 === i ? '' : '\n'}`).join``;
