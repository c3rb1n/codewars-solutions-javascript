const possiblyPerfect = (key, answers) => {
    let wrongAnswersAmount = 0;
    let rightAnswersAmount = 0;

    key.forEach((el, i) => {
        if (el === '_') {
            rightAnswersAmount++;
            wrongAnswersAmount++;
        } else if (el === answers[i]) {
            rightAnswersAmount++;
        } else {
            wrongAnswersAmount++;
        }
    });

    return (
        rightAnswersAmount === key.length || wrongAnswersAmount === key.length
    );
};
