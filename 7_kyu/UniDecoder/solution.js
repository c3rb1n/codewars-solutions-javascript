const uniDecoder = (...args) =>
    args.filter(Number).length ? String.fromCharCode(...args.filter(Number)) : 'not a valid character code';
