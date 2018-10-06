const chai = require('chai');

const { expect } = chai;

const Name = require('../../src/name');
const Greeting = require('../../src/greeting');
const Punctuation = require('../../src/punctuation');

describe('Name', () => {
    describe('construction', () => {
        it('should be created with a member of the greeting class', () => {
            const testName = new Name();
            expect(testName.greeting).to.be.instanceOf(Greeting);
        });

        it('should be created with a member of the punctuation class', () => {
            const testName = new Name();
            expect(testName.punctuation).to.be.instanceOf(Punctuation);
        });
    });

    describe('return greeting', () => {
        it('returns simple greeting', () => {
            const testName = new Name();
            expect(testName.returnGreeting('Bob')).to.eq('Hello, Bob.');
        });

        it('returns uppercase greeting', () => {
            const testName = new Name();
            expect(testName.returnGreeting('JERRY')).to.eq('HELLO JERRY!');
        });

        it('should return a greeting for an array of 2 names', () => {
            const testName = new Name();
            expect(testName.returnGreeting(['Jill', 'Jane'])).to.eq('Hello, Jill and Jane');
        });
    });
});