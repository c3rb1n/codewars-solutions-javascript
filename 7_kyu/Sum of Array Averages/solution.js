const sumAverage = arr =>
    Math.floor(
        arr
            .map(el => el.reduce((a, b) => a + b) / el.length)
            .reduce((a, b) => a + b)
    );
