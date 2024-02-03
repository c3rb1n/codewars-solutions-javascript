const highAndLow = numbers => {
    const splittedNumbers = numbers.split` `;

    return `${Math.max(...splittedNumbers)} ${Math.min(...splittedNumbers)}`;
};
