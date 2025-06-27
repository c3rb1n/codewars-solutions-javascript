const timeConverter = ['midnight', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

const linkConverter = minutes => {
    if (minutes === '00') return '';
    if (minutes <= '30') return 'past ';

    return 'to ';
};

const minutesConverter = minutes => {
    let basis;

    if (minutes > 30) {
        if (minutes >= 50) basis = 40;
        else if (minutes >= 40) basis = 20;
        else basis = 0;
    }

    const usedValue = basis === undefined ? minutes : `${minutes - (basis + minutes[1] * 2)}`;

    return usedValue[0] === '2' && usedValue[1] > 0 ?
        `twenty ${timeConverter[+usedValue[1]]}` : timeConverter[+usedValue];
};

const hoursConverter = (hours, minutes) => {
    if (minutes > 30) {
        if (hours === '11') return 'twelve';
        if (hours === '12') return 'one';
        if (hours === '23') return 'midnight';
    }

    const basis = minutes > 30 ? 1 : 0;

    return timeConverter[(hours > 12 ? hours - 12 : +hours) + basis];
};

const solve = time => {
    let [hours, minutes] = time.split(':');
    const link = linkConverter(minutes);
    const hasOClock = minutes === '00' && hours !== '00';

    hours = hoursConverter(hours, minutes);

    if (minutes === '00') {
        minutes = '';
    } else if (minutes === '30') {
        minutes = 'half ';
    } else if (minutes === '15' || minutes === '45') {
        minutes = 'quarter ';
    } else {
        minutes = `${minutesConverter(minutes)} ${minutes === '01' || minutes === '59' ? 'minute' : 'minutes'} `;
    }

    return `${minutes}${link}${hours}${hasOClock ? ' o\'clock' : ''}`;
};
