const initializeNames = name =>
    name.split` `.map((el, i, arr) => (i === 0 || i === arr.length - 1 ? el : `${el[0]}.`)).join` `;
