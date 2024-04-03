const sortMyString = S =>
    [
        S.replace(/./g, (el, i) => (i % 2 === 0 ? el : '')),
        S.replace(/./g, (el, i) => (i % 2 !== 0 ? el : ''))
    ].join` `;
