const replicate = (times, number) =>
    times > 0
        ? times === 1
            ? [number]
            : [number, ...replicate(times - 1, number)]
        : [];
