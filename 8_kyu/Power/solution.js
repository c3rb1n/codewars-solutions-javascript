const numberToPower = (number, power) => (power === 0 ? 1 : number * numberToPower(number, power - 1));
