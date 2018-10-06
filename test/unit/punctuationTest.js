const chai = require('chai');

const { expect } = chai;

const Punctuation = require('../../src/punctuation');

describe('Punctuation', () => {
    let testPunctuation;
    beforeEach(() => {
        testPunctuation = new Punctuation();
    });

    describe('add punctuation', () => {
        it('addPunctuation should return a period', () => {
            expect(testPunctuation.addPunctuation('Bob')).to.eq('Bob.');
        });

        it('addPunctuation should return a bang', () => {
            expect(testPunctuation.addPunctuation('JERRY')).to.eq('JERRY!');
        });
    });

    describe('add period', () => {
        it('addPeriod should add a period', () => {
            expect(testPunctuation.addPeriod('Bob')).to.eq('Bob.');
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
