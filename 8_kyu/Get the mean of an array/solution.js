const getAverage = marks =>
    Math.floor(marks.reduce((a, b) => a + b) / marks.length);
