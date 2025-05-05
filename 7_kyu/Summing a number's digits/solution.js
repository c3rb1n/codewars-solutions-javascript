const sumDigits = number => [...`${Math.abs(number)}`].reduce((a, b) => a + +b, 0);
