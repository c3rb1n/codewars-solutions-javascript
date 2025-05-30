const solution = str => (str.length % 2 === 0 ? str : `${str}_`).match(/../g) || [];
