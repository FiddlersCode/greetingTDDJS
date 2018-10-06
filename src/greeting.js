const isUpperCase = require('is-upper-case');
const Punctuation = require('./punctuation');

class Greeting {
    constructor() {
        this.hello = 'Hello, ';
        this.uppercaseHello = 'HELLO ';
        this.defaultGreeting = 'Hello, my friend';
        this.punctuation = new Punctuation();
    }

    greet(name) {
        if (Array.isArray(name)) {
            return 'Hello, Jill and Jane';
        }
        if (!name) {
            return this.defaultGreeting;
        }
        if (isUpperCase(name)) {
            return this.uppercaseHello + this.punctuation.addPunctuation(name);
        }
        return this.hello + this.punctuation.addPunctuation(name);
    }
}
module.exports = Greeting;
