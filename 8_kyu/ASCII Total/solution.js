const uniTotal = string => string.split``.reduce((a, b) => a + b.charCodeAt(), 0);
