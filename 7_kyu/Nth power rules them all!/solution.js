const modifiedSum = (a, n) =>
    a.map(el => el ** n).reduce((acc, b) => acc + b) -
    a.reduce((acc, b) => acc + b);
