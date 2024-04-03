const solve = (a, b) => {
    let aliceTotalScore = 0;
    let bobTotalScore = 0;

    a.forEach((el, i) => {
        if (el > b[i]) aliceTotalScore++;
        else if (el < b[i]) bobTotalScore++;
    });

    const quote =
        aliceTotalScore > bobTotalScore
            ? 'Alice made "Kurt" proud!'
            : aliceTotalScore < bobTotalScore
            ? 'Bob made "Jeff" proud!'
            : 'that looks like a "draw"! Rock on!';

    return `${aliceTotalScore}, ${bobTotalScore}: ${quote}`;
};
