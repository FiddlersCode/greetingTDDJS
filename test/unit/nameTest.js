const chai = require('chai');

const { expect } = chai;

const Name = require('../../src/name');

describe('Name', () => {
    describe('format name', () => {
        it('returns a simple name', () => {
            expect(Name.formatName('Bob')).to.eq('Bob');
        });

        it('returns uppercase name', () => {
            expect(Name.formatName('JERRY')).to.eq('JERRY');
        });

        it('should format an array of 2 names', () => {
            expect(Name.formatName(['Jill', 'Jane'])).to.eq('Jill and Jane');
        });
    });
});
