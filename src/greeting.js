class Greeting {
    constructor() {
        this.hello = 'Hello, ';
        this.uppercaseHello = 'HELLO ';
        this.defaultGreeting = 'Hello, my friend';
    }

    greet(name) {
        if (!name) {
            return this.defaultGreeting;
        }
        return this.hello + this.addPeriod(name);
    }

    addPeriod(name) {
        const period = '.';
        return name + period;
    }
}
module.exports = Greeting;
