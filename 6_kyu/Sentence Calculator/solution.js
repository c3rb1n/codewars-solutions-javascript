const lettersToNumbers = s =>
    s.match(/[\dA-Za-z]/g)
     .map(el => {
         if (/[a-z]/.test(el)) return el.charCodeAt() - 96;
         if (/[A-Z]/.test(el)) return (el.charCodeAt() - 64) * 2;
         return el.charCodeAt() - 48;
     })
     .reduce((a, b) => a + b);
