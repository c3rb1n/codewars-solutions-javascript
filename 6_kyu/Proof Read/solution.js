const proofread = str =>
    str.at(0).toUpperCase() +
    str.slice(1).toLowerCase().replaceAll('ie', 'ei').replace(/(?<=\. )./g, el => el.toUpperCase());
