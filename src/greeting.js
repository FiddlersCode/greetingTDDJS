const Punctuation = require('./punctuation');

class Greeting {
    constructor() {
        this.hello = 'Hello, ';
        this.uppercaseHello = 'HELLO ';
        this.defaultGreeting = 'Hello, my friend';
        this.punctuation = new Punctuation();
    }

    greet(name) {
        if (!name) {
            return this.defaultGreeting;
        }
        return this.hello + this.punctuation.addPeriod(name);
    }
}
module.exports = Greeting;
