const nbrValidTickets = tickets => tickets.reduce((a, b) => a + /^[a-z]\d[a-z]{4}$/i.test(b), 0);
