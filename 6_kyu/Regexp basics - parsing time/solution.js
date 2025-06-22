String.prototype.toSeconds = function() {
    return /^\d\d(:[0-5]\d){2}$/.test(this) ?
        this.split(':').reduce((a, b, i) => {
            const minutesOrSecondsToSeconds = i === 1 ? b * 60 : +b;

            return a + (i === 0 ? b * 3600 : minutesOrSecondsToSeconds);
        }, 0) : null;
};
