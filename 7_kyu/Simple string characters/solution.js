const solve = s => [
    s.replace(/[^A-Z]/g, '').length,
    s.replace(/[^a-z]/g, '').length,
    s.replace(/\D/g, '').length,
    s.replace(/[^\W_]/g, '').length
];
