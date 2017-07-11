let createList = require('../list-add-swap-shift-left-right').createList;

let expect = require('chai').expect;


describe("createList", function() {
    let myList = {};
    beforeEach(function () {
        myList = createList();
    });
    it("should return correct array", function() {
        myList.add(5);
      expect(myList.toString()).to.equal("5")
    });
    it("should return correct array", function() {
        myList.add("pesho");
        myList.add(4);
        expect(myList.toString()).to.equal("pesho, 4")
    });
    it("should return rotation array", function() {
        myList.add("pesho");
        myList.add(4);
        myList.shiftRight();
        expect(myList.toString()).to.equal("4, pesho")
    });
    it("should return rotation array", function() {
        myList.add("pesho");
        myList.add(4);
        myList.shiftLeft();
        expect(myList.toString()).to.equal("4, pesho")
    });
    it("should return rotation array", function() {
        myList.add("pesho");
        myList.add(4);
        myList.shiftLeft();
        expect(myList.toString()).to.equal("4, pesho")
    });
    it("should return rotation array", function() {
        myList.add("pesho");
        myList.add(4);
        myList.add("gosho");
        myList.add(3);
        expect(myList.swap(1,1)).to.equal(false)
    });

    it("should return rotation array", function() {
        myList.add("pesho");
        myList.add(4);
        myList.add("gosho");
        myList.add(3);
        expect(myList.swap(1212,1)).to.equal(false)
    });
    it("should return rotation array", function() {
        myList.add("pesho");
        myList.add(4);
        myList.add("gosho");
        myList.add(3);
        expect(myList.swap(1,1313)).to.equal(false)
    });
    it("should return rotation array", function() {
        myList.add("pesho");
        myList.add(4);
        myList.add("gosho");
        myList.add(3);
        expect(myList.swap(1,2)).to.equal(true)
    });
    it("should return rotation array", function() {
        myList.add("pesho");
        myList.add(4);
        myList.add("gosho");
        myList.add(3);
        expect(myList.swap(1,"2")).to.equal(false)
    });
    it("should return rotation array", function() {
        myList.add("pesho");
        myList.add(4);
        myList.add("gosho");
        myList.add(3);
        expect(myList.swap("1",2)).to.equal(false)
    });
    it("should return rotation array", function() {
        myList.add("pesho");
        myList.add(4);
        myList.add("gosho");
        myList.add(3);
        expect(myList.swap(1,-2)).to.equal(false)
    });
    it("should return rotation array", function() {
        myList.add("pesho");
        myList.add(4);
        myList.add("gosho");
        myList.add(3);
        expect(myList.swap(-1,2)).to.equal(false)
    });
    it("should return rotation array", function() {
        myList.add(3);
        expect(myList.swap(1, myList.length)).to.equal(false)
    });
    it("should be empty on initialization", function () {
        expect(myList.toString()).to.equal("");
    });
    it("should return true if swapping existing indices", function () {
        myList.add(5);
        myList.add(7);
        myList.add(9);
        myList.add(3);
        expect(myList.swap(1,3)).to.equal(true);
        expect(myList.toString()).to.equal('5, 3, 9, 7');
        expect(myList.swap(0, 2)).to.equal(true);
        expect(myList.toString()).to.equal('9, 3, 5, 7');
        expect(myList.swap(2, 0)).to.equal(true);
        expect(myList.toString()).to.equal('5, 3, 9, 7');
        expect(myList.swap(3, 1)).to.equal(true);
        expect(myList.toString()).to.equal('5, 7, 9, 3');
    });
    it("should return false on swap with incorrect or equal indices", function () {
        myList.add(5);
        myList.add(7);
        myList.add(8);
        expect(myList.swap(0, 3)).to.equal(false);
        expect(myList.toString()).to.equal("5, 7, 8");
        expect(myList.swap(3, 0)).to.equal(false);
        expect(myList.toString()).to.equal("5, 7, 8");
    });
});
