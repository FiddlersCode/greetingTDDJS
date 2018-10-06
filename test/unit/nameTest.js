const chai = require('chai');

const { expect } = chai;

const Name = require('../../src/name');
const Greeting = require('../../src/greeting');
const Punctuation = require('../../src/punctuation');

describe('Name', () => {
    let testName;
    beforeEach(() => {
        testName = new Name();
    });
    describe('construction', () => {
        it('should be created with a member of the greeting class', () => {
            expect(testName.greeting).to.be.instanceOf(Greeting);
        });

        it('should be created with a member of the punctuation class', () => {
            expect(testName.punctuation).to.be.instanceOf(Punctuation);
        });
    });

    describe('return greeting', () => {
        it('returns simple greeting', () => {
            expect(testName.returnGreeting('Bob')).to.eq('Hello, Bob.');
        });

        it('returns uppercase greeting', () => {
            expect(testName.returnGreeting('JERRY')).to.eq('HELLO JERRY!');
        });

        it('should return a greeting for an array of 2 names', () => {
            expect(testName.returnGreeting(['Jill', 'Jane'])).to.eq('Hello, Jill and Jane');
        });
    });

    afterEach(() => {
        testName = null;
    });
});
