const wordsToMarks = string =>
    string.split``
        .map(letter => 'abcdefghijklmnopqrstuvwxyz'.indexOf(letter) + 1)
        .reduce((a, b) => a + b);
