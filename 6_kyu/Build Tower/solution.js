const towerBuilder = nFloors =>
    Array.from({length: nFloors}, (_, i) =>
        ' '.repeat(nFloors - (i + 1)) + '*'.repeat(2 * i + 1) + ' '.repeat(nFloors - (i + 1)));
