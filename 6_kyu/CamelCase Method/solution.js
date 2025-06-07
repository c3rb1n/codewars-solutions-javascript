String.prototype.camelCase = function() {
    return this.length ? this.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join('') : '';
};
