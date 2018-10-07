const isUpperCase = require('is-upper-case');

class Punctuation {
    static addPunctuation(name) {
        if (isUpperCase(name)) {
            return Punctuation.addBang(name);
        }
        return Punctuation.addPeriod(name);
    }

    static addPeriod(name) {
        const period = '.';
        return name + period;
    }

    static addBang(name) {
        const bang = '!';
        return name + bang;
    }
}
module.exports = Punctuation;
