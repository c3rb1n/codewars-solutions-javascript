const calculate = str =>
    `${eval(str.replaceAll('plus', '+').replaceAll('minus', '-'))}`;
