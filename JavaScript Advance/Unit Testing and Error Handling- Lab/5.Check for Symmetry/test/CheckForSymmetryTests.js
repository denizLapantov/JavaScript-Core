 let isSymmetric = require('../5.Check for Symmetry').isSymmetric;

 let expect = require('chai').expect;

 describe("Test result" ,function () {
     it("Should be a true for [1,2,3,3,2,1]", () => {
         expect(isSymmetric([1,2,3,3,2,1])).to.be.true;
     });
     it("Should be a false for [1,2,3,4,2,1]", () => {
         expect(isSymmetric([1,2,3,4,2,1])).to.be.false;
     });
     it("Should be a true for [-1,2,-1]", () => {
         expect(isSymmetric([-1,2,-1])).to.be.true;
     });
     it("Should be a false for [-1,2,1]", () => {
         expect(isSymmetric([-1,2,1])).to.be.false;
     });
     it("Should be a false for [1,2]", () => {
         expect(isSymmetric([1,2])).to.be.false;
     });
     it("Should be a true for [1]", () => {
         expect(isSymmetric([1])).to.be.true;
     });
     it("Should be a true for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", () => {
         expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.true;
     });
     it("Should be a false for [5,'hi',{a:5},new Date(),{X:5},'hi',5]", () => {
         expect(isSymmetric([5,'hi',{a:5},new Date(),{X:5},'hi',5])).to.be.false;
     });
     it("Should be a false for 1,2,2,1", () => {
         expect(isSymmetric(1,2,2,1)).to.be.false;
     })
 });