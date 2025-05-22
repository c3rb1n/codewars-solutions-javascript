const nextLetter = str => str.replace(/[a-z]/ig, el => 
    String.fromCharCode('zZ'.includes(el) ? el.charCodeAt() - 25 : el.charCodeAt() + 1));
