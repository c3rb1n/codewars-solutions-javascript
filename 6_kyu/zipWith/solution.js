const zipWith = (fn, a0, a1) =>
    Array.from({length: (a0.length < a1.length ? a0 : a1).length}).map((_, i) => fn(a0[i], a1[i]));
