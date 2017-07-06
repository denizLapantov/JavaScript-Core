let mathEnforcer = require('../MathEnforcer').mathEnforcer;

let expect = require('chai').expect;

describe("MathEnforcer" ,function () {
   describe('AddFive',function () {
       it("Should return undefined for non number parameter",function () {
           expect(mathEnforcer.addFive('5')).to.equal(undefined);
       });
       it("Should return correct result with number parameter",function () {
           expect(mathEnforcer.addFive(15)).to.equal(20);
       });
       it("Should return correct result with floating point number ",function () {
           expect(mathEnforcer.addFive(1.1)).to.equal(5 + 1.1);
       });
       it("Should return correct result with negative number  ",function () {
           expect(mathEnforcer.addFive(-1)).to.equal(4);
       });
   });
    describe('SubtractTen',function () {
        it("Should return undefined for non number parameter",function () {
            expect(mathEnforcer.subtractTen('5')).to.equal(undefined);
        });
        it("Should return correct result with number parameter",function () {
            expect(mathEnforcer.subtractTen(15)).to.equal(5);
        });
        it("Should return correct result with floating point number ",function () {
            expect(mathEnforcer.subtractTen(1.1)).to.equal(1.1 - 10);
        });
        it("Should return correct result with negative number  ",function () {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        });
    });
    describe('Sum',function () {
        it("Should return undefined for non number parameter",function () {
            expect(mathEnforcer.sum('5',5)).to.equal(undefined);
        });
        it("Should return correct result with number parameter",function () {
            expect(mathEnforcer.sum(15,4)).to.equal(19);
        });
        it("Should return correct result with floating point number ",function () {
            expect(mathEnforcer.sum(1.1,1)).to.equal(1.1 + 1);
        });
        it("Should return correct result with negative number  ",function () {
            expect(mathEnforcer.sum(-1,1)).to.equal(0);
        });
        it("Should return undefined for non number parameter",function () {
            expect(mathEnforcer.sum(5,'5')).to.equal(undefined);
        });
        it("Should return correct result with number parameter",function () {
            expect(mathEnforcer.sum(12,12)).to.equal(24);
        });
        it("Should return correct result with floating point number ",function () {
            expect(mathEnforcer.sum(1,1.1)).to.equal(1.1 + 1);
        });
        it("Should return correct result with negative number  ",function () {
            expect(mathEnforcer.sum(1,-1)).to.equal(0);
        });
    });
});