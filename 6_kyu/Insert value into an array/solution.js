Object.defineProperty(Array.prototype, 'insert', {
    value(index, value) {
        const result = this;
        const i = index > this.length ? this.length : index;

        result.splice(i, 0, value);

        return result;
    },
    enumerable: false
});
