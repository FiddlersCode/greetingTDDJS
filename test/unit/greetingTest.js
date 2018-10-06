const chai = require('chai');

const { expect } = chai;

const Greeting = require('../../src/greeting');

describe('Greeting', () => {
    describe('constructor', () => {
        it('should have a hello property', () => {
            const testGreeting = new Greeting();
            expect(testGreeting.hello).to.eq('Hello, ');
        });

        it('should have a default greeting', () => {
            const testGreeting = new Greeting();
            expect(testGreeting.defaultGreeting).to.eq('Hello, my friend');
        });

        it('should have an uppercase hello property', () => {
            const testGreeting = new Greeting();
            expect(testGreeting.uppercaseHello).to.eq('HELLO ');
        });
    });

    describe('single name', () => {
        it('should return a simple greeting', () => {
            const testGreeting = new Greeting();
            expect(testGreeting.greet('Bob')).to.eq('Hello, Bob');
        });
    });


    describe('null name', () => {
        it('should return a default greeting', () => {
            const testGreeting = new Greeting();
            expect(testGreeting.greet()).to.eq('Hello, my friend');
        });
    });
});
