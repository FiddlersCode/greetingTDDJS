class Greeting {
    constructor() {
        this.hello = 'Hello, ';
    }

    greet(name) {
        if (!name) {
            return this.hello + 'my friend';
        } else {
            return this.hello + name;
        }
    }
}
module.exports = Greeting;
