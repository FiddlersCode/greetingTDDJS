const chai = require('chai');

const { expect } = chai;

const Name = require('../../src/name');

describe('Name', () => {
    describe('default greeting', () => {
        it('return greeting', () => {
            const testName = new Name();
            expect(testName.returnGreeting('Bob')).to.eq('Hello, Bob.');
        });
    });
});
