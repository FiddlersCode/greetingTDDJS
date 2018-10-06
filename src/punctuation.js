const isUpperCase = require('is-upper-case');

class Punctuation {
    addPunctuation(name) {
        if (isUpperCase(name)) {
            return this.addBang(name);
        }
        return this.addPeriod(name);
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
