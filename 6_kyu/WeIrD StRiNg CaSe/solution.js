const toWeirdCase = string =>
    string.split(' ')
          .map(word => word.replace(/./g, (letter, i) => i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()))
          .join(' ');
