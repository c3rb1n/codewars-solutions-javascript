String.prototype.toCents = function () {
    return /^\$\d+\.\d\d$/.test(this) ? +this.replace(/\D/g, '') : null;
};
