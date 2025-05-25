const displayLargeNumber = n =>
    `${n}`.split``.reverse().join``
          .replace(/\d{3}(?=\d)/g, el => `${el},`)
          .split``.reverse().join``;
