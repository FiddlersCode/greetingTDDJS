const chai = require('chai');

const { expect } = chai;

const Punctuation = require('../../src/punctuation');

describe('Punctuation', () => {
    describe('add punctuation', () => {
        it('addPunctuation should return a period', () => {
            const testPunctuation = new Punctuation();
            expect(testPunctuation.addPunctuation('Bob')).to.eq('Bob.');
        });

        it('addPunctuation should return a bang', () => {
            const testPunctuation = new Punctuation();
            expect(testPunctuation.addPunctuation('JERRY')).to.eq('JERRY!');
        });
    });
});
