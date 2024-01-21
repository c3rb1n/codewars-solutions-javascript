const correct = string =>
    string.split``.map(el =>
        el === '5' ? 'S' : el === '1' ? 'I' : el === '0' ? 'O' : el
    ).join``;
