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

    describe('default greeting', () => {
        it('returns greeting', () => {
            const testName = new Name();
            expect(testName.returnGreeting('Bob')).to.eq('Hello, Bob.');
        });
    });
});
