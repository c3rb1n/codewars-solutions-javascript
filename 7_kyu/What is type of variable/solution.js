const type = value =>
    Array.isArray(value) ? 'array' : value instanceof Date ? 'date' : value === null ? 'null' : typeof value;
