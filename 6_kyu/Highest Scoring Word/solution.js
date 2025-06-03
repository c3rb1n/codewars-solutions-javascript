const high = x => {
    const splittedX = x.split(' ');
    const scores = splittedX.map(el =>
        el.split('')
          .reduce((a, b) => a + ('abcdefghijklmnopqrstuvwxyz'.indexOf(b) + 1), 0));

    return splittedX[scores.indexOf(Math.max(...scores))];
};
