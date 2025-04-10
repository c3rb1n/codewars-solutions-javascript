const buildFun = n => Array.from({length: n ? n : 1}, (_, i) => () => i);
