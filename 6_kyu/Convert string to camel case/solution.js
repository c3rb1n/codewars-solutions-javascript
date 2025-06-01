const toCamelCase = str => str.split(/[^a-z]/i).map((el, i) => i > 0 ? el[0].toUpperCase() + el.slice(1) : el).join('');
