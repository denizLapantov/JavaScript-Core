let lookupChar = require('../charLookup').lookupChar;

let expect = require('chai').expect;

describe("Test result" ,function () {
    it("Should return undefined for non string first parameter",function () {
        expect(lookupChar(6,0)).to.equal(undefined);
    });
    it("Should return undefined for non integer second parameter",function () {
        expect(lookupChar('pesho','3')).to.equal(undefined);
    });
    it("Should return undefined for non integer second parameter",function () {
        expect(lookupChar('pesho',4.12)).to.equal(undefined);
    });
    it("Should return undefined for Incorrect index",function () {
        expect(lookupChar('pesho',23)).to.equal('Incorrect index');
    });
    it("Should return undefined for Incorrect index",function () {
        expect(lookupChar('pesho',-3)).to.equal('Incorrect index');
    });
    it("Should return p for 'pesho' index 0",function () {
        expect(lookupChar('pesho',0)).to.equal('p');
    });
    it("Should return o for 'pesho' index 4",function () {
        expect(lookupChar('pesho',4)).to.equal('o');
    });
});
