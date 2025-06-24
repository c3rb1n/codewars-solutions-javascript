String.prototype.toInteger = function() {
    const isValidInput = /^[+-]?(\d+|0b[01]+|0o[0-7]+|0x[\dA-Fa-f]+)$/.test(this);

    if (isValidInput) {
        return this.includes('-') ? -Number(this.slice(1)) : Number(this);
    }

    return null;
};
