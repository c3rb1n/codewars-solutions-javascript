const initializeNames = name => {
    const words = name.split` `;

    return (words.length > 2
        ? words.map((word, i) =>
              i === 0 || i === words.length - 1
                  ? word
                  : `${word[0].toUpperCase()}.`
          )
        : words
    ).join` `;
};
