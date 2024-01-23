const countSheeps = sheep =>
    sheep.map(el => (el ? 1 : 0)).reduce((a, b) => a + b, 0);
