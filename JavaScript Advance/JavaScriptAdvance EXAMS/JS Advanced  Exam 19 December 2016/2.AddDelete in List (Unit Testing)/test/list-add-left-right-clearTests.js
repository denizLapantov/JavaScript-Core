let makeList = require('../list-add-left-right-clear').makeList;

let expect = require('chai').expect;

describe("list", function() {
    let myList = {};
    beforeEach(function () {
        myList = makeList();
    });
    it("should return correct for correct index ", function() {
        myList.addLeft(3);
        expect(myList.toString()).to.equal("3");
    });
    it("should return correct for correct index ", function() {
        myList.addLeft(3);
        myList.addLeft(5);
        expect(myList.toString()).to.equal("5, 3");
    });
    it("should return correct for correct index ", function() {
        myList.addLeft(3);
        myList.addLeft("pesho");
        expect(myList.toString()).to.equal("pesho, 3");
    });
    it("should return correct for correct index ", function() {
        myList.addRight(3);
        expect(myList.toString()).to.equal("3");
    });
    it("should return correct for correct index ", function() {
        myList.addRight(3);
        myList.addRight(5);
        expect(myList.toString()).to.equal("3, 5");
    });
    it("should return correct for correct index ", function() {
        myList.addRight(3);
        myList.addRight("pesho");
        expect(myList.toString()).to.equal("3, pesho");
    });
    it("should return correct for correct index ", function() {
        myList.addRight('');
        expect(myList.toString()).to.equal('');
    });
    it("should return correct for correct index ", function() {
        myList.addLeft('');
        expect(myList.toString()).to.equal('');
    });

    it("should return correct for correct index ", function() {
        myList.addRight(3);
        myList.addRight("pesho");
        myList.clear();
        expect(myList.clear()).to.equal(undefined);
    });
    it("should return correct for correct index ", function() {
        myList.addRight(3);
        myList.addRight("pesho");
        myList.clear();
        expect(myList.toString()).to.equal('');
    });

});