const isUpperCase = require('is-upper-case');
const Punctuation = require('./punctuation');
const Name = require('./name');

class Greeting {
    constructor() {
        this.hello = 'Hello, ';
        this.uppercaseHello = 'HELLO ';
        this.defaultGreeting = 'Hello, my friend';
        this.name = new Name();
    }

    greet(name) {
        if (!name) {
            return this.defaultGreeting;
        }
        const formattedName = this.name.formatName(name);
        if (isUpperCase(formattedName)) {
            return this.uppercaseHello + Punctuation.addPunctuation(formattedName);
        }
        return this.hello + Punctuation.addPunctuation(formattedName);
    }
}
module.exports = Greeting;
