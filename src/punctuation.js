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
}
module.exports = Punctuation;
