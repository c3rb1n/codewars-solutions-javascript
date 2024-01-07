const flickSwitch = arr => {
    let currentFlickState = true;

    return arr.map(str => {
        if (str === 'flick') currentFlickState = !currentFlickState;
        return currentFlickState;
    });
};
