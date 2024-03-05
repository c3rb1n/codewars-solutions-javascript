const XO = str =>
    (str.match(/x/gi) || []).length === (str.match(/o/gi) || []).length;
