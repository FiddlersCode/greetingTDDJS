class Greeting {

    constructor() {
        this.hello = 'Hello, ';
    }
    greet(name) {
        return this.hello + name;
    }
}
module.exports = Greeting;
