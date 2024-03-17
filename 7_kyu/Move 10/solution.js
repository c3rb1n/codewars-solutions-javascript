const moveTen = s => {
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < s.length; i++) {
        const letterIndex = abc.indexOf(s[i]);
        const movementIndex =
            26 - letterIndex > 10
                ? letterIndex + 10
                : Math.abs(26 - (letterIndex + 10));
        result += abc[movementIndex];
    }

    return result;
};
