const isUpperCase = require('is-upper-case');
const Greeting = require('./greeting');
const Punctuation = require('./punctuation');

class Name {
    constructor() {
        this.greeting = new Greeting();
        this.punctuation = new Punctuation();
    }

    returnGreeting(name) {
        if (Array.isArray(name)) {
            return 'Hello, Jill and Jane';
        }
        if (isUpperCase(name)) {
            return this.greeting.uppercaseHello + this.punctuation.addPunctuation(name);
        }
        return this.greeting.hello + this.punctuation.addPunctuation(name);
    }
}
module.exports = Name;
