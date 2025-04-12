const arraySum = arr => arr.reduce((a, b) => a + (typeof b === 'number' ? b : Array.isArray(b) ? arraySum(b) : 0));
