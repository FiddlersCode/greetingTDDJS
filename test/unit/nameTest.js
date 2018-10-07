const chai = require('chai');

const { expect } = chai;

const Name = require('../../src/name');

describe('Name', () => {
    let testName;
    beforeEach(() => {
        testName = new Name();
    });

    describe('format name', () => {
        it('returns a simple name', () => {
            expect(testName.formatName('Bob')).to.eq('Bob');
        });

        it('returns uppercase name', () => {
            expect(testName.formatName('JERRY')).to.eq('JERRY');
        });

        it('should format an array of 2 names', () => {
            expect(testName.formatName(['Jill', 'Jane'])).to.eq('Jill and Jane');
        });
    });

    afterEach(() => {
        testName = null;
    });
});
