const isUpperCase = require('is-upper-case');
const Punctuation = require('./punctuation');
const Name = require('./name');

class Greeting {
    constructor() {
        this.hello = 'Hello, ';
        this.uppercaseHello = 'HELLO ';
        this.defaultGreeting = 'Hello, my friend';
        this.punctuation = new Punctuation();
        this.name = new Name();
    }

    greet(name) {
        if (!name) {
            return this.defaultGreeting;
        }
        const formattedName = this.name.formatName(name);
        if (isUpperCase(formattedName)) {
            return this.uppercaseHello + this.punctuation.addPunctuation(formattedName);
        }
        return this.hello + this.punctuation.addPunctuation(formattedName);
    }
}
module.exports = Greeting;
