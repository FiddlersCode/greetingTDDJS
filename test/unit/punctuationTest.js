const chai = require('chai');

const { expect } = chai;

const Punctuation = require('../../src/punctuation');

describe('Punctuation', () => {
    let testPunctuation;
    beforeEach(() => {
        testPunctuation = new Punctuation();
    });

    describe('add punctuation', () => {
        it('addPunctuation should add a period', () => {
            expect(testPunctuation.addPunctuation('Bob')).to.eq('Bob.');
        });

        it('addPunctuation should add a period to an array of 2 names', () => {
            expect(testPunctuation.addPunctuation('Jill and Jane')).to.eq('Jill and Jane.');
        });

        it('addPunctuation should add a bang', () => {
            expect(testPunctuation.addPunctuation('JERRY')).to.eq('JERRY!');
        });
    });

    describe('add period', () => {
        it('addPeriod should add a period', () => {
            expect(testPunctuation.addPeriod('Bob')).to.eq('Bob.');
        });

        it('addPeriod should add a period to an array of 2 names', () => {
            expect(testPunctuation.addPeriod('Jill and Jane')).to.eq('Jill and Jane.');
        });
    });


    describe('add bang', () => {
        it('addBang should add a bang', () => {
            expect(testPunctuation.addBang('JERRY')).to.eq('JERRY!');
        });
    });

    afterEach(() => {
        testPunctuation = null;
    });
});
