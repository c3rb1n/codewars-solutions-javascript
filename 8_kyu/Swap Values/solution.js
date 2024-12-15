const swapValues = (...args) => {
    const temp = args[0][0];
    args[0][0] = args[0][1];
    args[0][1] = temp;
};
