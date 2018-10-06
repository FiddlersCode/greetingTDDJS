const chai = require('chai');

const { expect } = chai;

const Greeting = require('../../src/greeting');
const Punctuation = require('../../src/punctuation');

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

        it('should have a punctuation', () => {
            const testGreeting = new Greeting();
            expect(testGreeting.punctuation).to.be.instanceOf(Punctuation);
        });
    });

    describe('single name', () => {
        it('should return a simple greeting', () => {
            const testGreeting = new Greeting();
            expect(testGreeting.greet('Bob')).to.eq('Hello, Bob.');
        });
    });


    describe('null name', () => {
        it('should return a default greeting', () => {
            const testGreeting = new Greeting();
            expect(testGreeting.greet()).to.eq('Hello, my friend');
        });
    });

    describe('uppercase name', () => {
        it('should return an uppercase greeting', () => {
            const testGreeting = new Greeting();
            expect(testGreeting.greet('JERRY')).to.eq('HELLO JERRY!');
        });
    });

    describe('array of 2 names', () => {
        it('should return a greeting for both names', () => {
            const testGreeting = new Greeting();
            expect(testGreeting.greet(['Jill', 'Jane'])).to.eq('Hello, Jill and Jane');
        });
    });
});
