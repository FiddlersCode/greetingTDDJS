const chai = require('chai');

const { expect } = chai;

const Greeting = require('../../src/greeting');

describe('Greeting', () => {
    describe('constructor', () => {
        it('should be an instance of the Greeting class', () => {
            const testGreeting = new Greeting();
            expect(testGreeting.hello).to.eq('Hello, ');
        });
    });

    describe('single name', () => {
        it('should return a simple greeting', () => {
            const testGreeting = new Greeting();
            expect(testGreeting.greet('Bob')).to.eq('Hello, Bob');
        });
    });
});
