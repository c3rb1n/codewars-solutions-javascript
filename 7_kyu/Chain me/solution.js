const chain = (input, fs) => fs.reduce((a, b) => b(a), input);
