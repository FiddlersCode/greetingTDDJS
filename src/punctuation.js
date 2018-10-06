const isUpperCase = require('is-upper-case');

class Punctuation {
    addPunctuation(name) {
        if (isUpperCase(name)) {
            const bang = '!';
            return name + bang;
        }
        const period = '.';
        return name + period;
    }

    addPeriod(name) {
        const period = '.';
        return name + period;
    }

    addBang(name) {
        const bang = '!';
        return name + bang;
    }
}
module.exports = Punctuation;
