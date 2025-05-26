const vowelIndices = word => [...word].map((el, i) => /[aeiouy]/i.test(el) && i + 1).filter(Boolean);
