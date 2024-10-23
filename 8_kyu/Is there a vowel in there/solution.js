const isVow = a => a.map(el => ('aeiou'.includes(String.fromCharCode(el)) ? String.fromCharCode(el) : el));
