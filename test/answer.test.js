const expect = require('chai').expect;
// import math file
const answer = require('../answer');
describe('answer.js tests', () => {
    describe('First question answer', () => {
        it('should return 2', () => {
            const result = answer.AdditivePersistence(2178);
            expect(result).to.equal(2);
        });
        it('should return 2', () => {
            const result = answer.AdditivePersistence(19);;
            expect(result).to.equal(2);
        });
        it('should return 0', () => {
            const result = answer.AdditivePersistence(4);;
            expect(result).to.equal(0);
        });
    });
    describe('Second question answer', () => {
        it('should return `greatest`', () => {
            const result = answer.LetterCount("Today, is the greatest day ever");
            expect(result).to.equal("greatest");
        });
        it('should return `hello`', () => {
            const result = answer.LetterCount("Hello apple pie");;
            expect(result).to.equal("Hello");
        });
        it('should return `appple`', () => {
            const result = answer.LetterCount("Hello appple pie");;
            expect(result).to.equal("appple");
        });
        it('should return -1', () => {
            const result = answer.LetterCount("No Words");;
            expect(result).to.equal(-1);
        });
    });
    describe('Third question answer', () => {
        it('should return `MEAIANLTSRID`', () => {
            const result = answer.Solution("MISTERALADIN",4);
            expect(result).to.equal("MEAIANLTSRID");
        });
    });
});