const chai = require('chai');

const { expect } = chai;

const Punctuation = require('../../src/punctuation');

describe('Punctuation', () => {
    describe('add punctuation', () => {
        it('addPunctuation should add a period', () => {
            expect(Punctuation.addPunctuation('Bob')).to.eq('Bob.');
        });

        it('addPunctuation should add a period to an array of 2 names', () => {
            expect(Punctuation.addPunctuation('Jill and Jane')).to.eq('Jill and Jane.');
        });

        it('addPunctuation should add a bang', () => {
            expect(Punctuation.addPunctuation('JERRY')).to.eq('JERRY!');
        });
    });

    describe('add period', () => {
        it('addPeriod should add a period', () => {
            expect(Punctuation.addPeriod('Bob')).to.eq('Bob.');
        });

        it('addPeriod should add a period to an array of 2 names', () => {
            expect(Punctuation.addPeriod('Jill and Jane')).to.eq('Jill and Jane.');
        });
    });


    describe('add bang', () => {
        it('addBang should add a bang', () => {
            expect(Punctuation.addBang('JERRY')).to.eq('JERRY!');
        });
    });
});
