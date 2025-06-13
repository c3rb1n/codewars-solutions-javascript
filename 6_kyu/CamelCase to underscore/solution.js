const toUnderScore = name =>
    name.split('_').map(el => el ? el.match(/[A-Z][a-z]*|\d+[a-z]*|[a-z]+/g).join('_') : '').join('_');
