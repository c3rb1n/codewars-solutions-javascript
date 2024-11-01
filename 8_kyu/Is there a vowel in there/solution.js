const isVow = a => a.map(code => ('aeiou'.includes(String.fromCharCode(code)) ? String.fromCharCode(code) : code));
