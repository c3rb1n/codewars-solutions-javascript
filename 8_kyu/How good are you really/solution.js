const betterThanAverage = (classPoints, yourPoints) => {
    const allPoints = [...classPoints, yourPoints];

    return allPoints.reduce((a, b) => a + b) / allPoints.length < yourPoints;
};
