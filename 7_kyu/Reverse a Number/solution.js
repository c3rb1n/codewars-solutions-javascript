const reverseNumber = n =>
    n < 0
        ? -`${Math.abs(n)}`.split``.reverse().join``
        : +`${n}`.split``.reverse().join``;
