const catMouse = x =>
    x.replace(/[^.]/g, '').length < 4 ? 'Caught!' : 'Escaped!';
