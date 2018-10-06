class Greeting {
    constructor() {
        this.hello = 'Hello, ';
        this.defaultGreeting = 'Hello, my friend';
    }

    greet(name) {
        if (!name) {
            return this.defaultGreeting;
        }
        return this.hello + name;
    }
}
module.exports = Greeting;
