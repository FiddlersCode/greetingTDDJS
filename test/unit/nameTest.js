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

        it('should format an array of 3 names', () => {
            expect(Name.formatName(['Amy', 'Brian', 'Charlotte'])).to.eq('Amy, Brian, and Charlotte');
        });
    });

    describe('format array', () => {
        it('formats an array with 2 names', () => {
            expect(Name.formatArray(['Jill', 'Jane'])).to.eq('Jill and Jane');
        });

        it('should format an array of 3 names', () => {
            expect(Name.formatArray(['Amy', 'Brian', 'Charlotte'])).to.eq('Amy, Brian, and Charlotte');
        });
    });

    describe('format mixed/single case array', () => {
        it('should format an array of 2 same-case names', () => {
            expect(Name.formatSingleCaseArray(['Jill', 'Jane'])).to.eq('Jill and Jane');
        });

        it('should format an array of 3 mixed-case names', () => {
            expect(Name.formatMixedCaseArray(['Amy', 'BRIAN', 'Charlotte'])).to.deep.eq([['Amy', 'Charlotte'], ['BRIAN']]);
        });
    });
});
