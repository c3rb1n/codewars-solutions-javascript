const wordSearch = (word, text) =>
    /^[a-z]+$/i.test(word) && text.split(' ').some(el => el.replace(/[^a-z]/gi, '') === word);
