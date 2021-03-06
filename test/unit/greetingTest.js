const chai = require('chai');

const { expect } = chai;

const Greeting = require('../../src/greeting');

describe('Greeting', () => {
    let testGreeting;
    beforeEach(() => {
        testGreeting = new Greeting();
    });
    describe('constructor', () => {
        it('should have a hello property', () => {
            expect(testGreeting.hello).to.eq('Hello, ');
        });

        it('should have a default greeting', () => {
            expect(testGreeting.defaultGreeting).to.eq('Hello, my friend');
        });

        it('should have an uppercase hello property', () => {
            expect(testGreeting.uppercaseHello).to.eq('HELLO ');
        });
    });

    describe('single name', () => {
        it('should return a simple greeting', () => {
            expect(testGreeting.greet('Bob')).to.eq('Hello, Bob.');
        });
    });


    describe('null name', () => {
        it('should return a default greeting', () => {
            expect(testGreeting.greet()).to.eq('Hello, my friend');
        });
    });

    describe('uppercase name', () => {
        it('should return an uppercase greeting', () => {
            expect(testGreeting.greet('JERRY')).to.eq('HELLO JERRY!');
        });
    });

    describe('array of 2 names', () => {
        it('should return a greeting for both names', () => {
            expect(testGreeting.greet(['Jill', 'Jane'])).to.eq('Hello, Jill and Jane.');
        });
    });

    describe('array of 3 names', () => {
        it('should return a greeting for both names', () => {
            expect(testGreeting.greet(['Amy', 'Brian', 'Charlotte'])).to.eq('Hello, Amy, Brian, and Charlotte.');
        });
    });

    afterEach(() => {
        testGreeting = null;
    });
});
