const encode = string => string.replace(/[aeiou]/g, el => 'aeiou'.indexOf(el) + 1);

const decode = string => string.replace(/\d/g, el => 'aeiou'[el - 1]);
