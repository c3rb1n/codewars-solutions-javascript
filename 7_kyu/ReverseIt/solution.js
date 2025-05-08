const reverseIt = data =>
    typeof data === 'string' || typeof data === 'number'
        ? typeof data === 'number'
            ? +[...`${data}`].reverse().join``
            : [...data].reverse().join``
        : data;
