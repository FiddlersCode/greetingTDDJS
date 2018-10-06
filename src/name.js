const Greeting = require('./greeting');
const Punctuation = require('./punctuation');

class Name {
    constructor() {
        this.greeting = new Greeting();
        this.punctuation = new Punctuation();
    }

    returnGreeting(name) {
        return this.greeting.hello + this.punctuation.addPunctuation(name);
    }
}
module.exports = Name;
