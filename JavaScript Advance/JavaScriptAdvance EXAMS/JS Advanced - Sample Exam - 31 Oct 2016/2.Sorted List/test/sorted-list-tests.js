let SortedList = require('../sorted-list').SortedList;
let expect = require('chai').expect;

describe("sorted list",function () {
    let list;
    beforeEach(()=>{
        list = new SortedList();
    });
    describe("constructors and methods",function () {
        it("should have constructors and methods",function () {
            expect(SortedList.prototype).to.haveOwnProperty('add');
            expect(SortedList.prototype).to.haveOwnProperty('remove');
            expect(SortedList.prototype).to.haveOwnProperty('get');
            expect(SortedList.prototype).to.haveOwnProperty('sort');
            expect(SortedList.prototype).to.haveOwnProperty('vrfyRange');
        });
        it('should select with a list of zero elements', function(){
            expect(list.list.length).to.be.equal(0)
        });

        it('should return that the collection inside is of type array/object', function(){
            expect(typeof list.list).to.be.equal('object')
        });
        it("should have size prop", function () {
            expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true);
            expect(SortedList.prototype).to.haveOwnProperty('size');
            expect(list.size).to.equal(0);
        });
    });
    describe("Add element in list",function () {
        it('adding one element should change the size of the collection', function(){
            list.add(5);
            expect(list.size).to.be.equal(1)
        });

        it('adding three elements should change the size to 3', function(){
            list.add(5);
            list.add(6);
            list.add(1);
            expect(list.size).to.be.equal(3)
        });

        it('adding three elements should sort them in a proper way. First element should be smallest', function(){
            list.add(5);
            list.add(1);
            list.add(6);
            expect(list.get(0)).to.be.equal(1)
        });

        it('adding three elements should sort them in a proper way. Last element should be the biggest', function(){
            list.add(50);
            list.add(150);
            list.add(30);
            expect(list.get(2)).to.be.equal(150)
        });
    });
    describe("Sort element in list",function () {
        it("should return correct result",function () {
            list.list = [10, 5, 25, 3, 40];
            list.sort();
            let sortedListExpected = [3, 5, 10, 25, 40];
            expect(list.list.toString()).to.equal(sortedListExpected.toString());
        });
    });
    describe("testing the vrfyRange method", function(){
        it("should return error for empty list",function () {
            let func = function () {
                list.vrfyRange(2);
            };
            expect(func).to.be.throw(Error, "Collection is empty.")
        });
        it("should return error for empty list",function () {
            list.add(3);
            let func = function () {
                list.vrfyRange(2);
            };
            expect(func).to.be.throw(Error, "Index was outside the bounds of the collection.")
        });
        it("should return error for empty list",function () {
            let func = function () {
                list.vrfyRange(-1);
            };
            expect(func).to.be.throw(Error, "Collection is empty.")
        })
    });
    describe("testing the remove method", function(){
        beforeEach(function() {
            list.add(50);
            list.add(150);
            list.add(30);
        });

        it('removing one of three elements should reduce collection size', function(){
            list.remove(1);
            expect(list.size).to.be.equal(2)
        });

        it('removing from an invalid index throws error', function(){
            let func = function(){
                list.remove(4);
            };
            expect(func).to.be.throw(Error, "Index was outside the bounds of the collection.")
        });

        it('removing one of three elements should remove the right element and propery sort them', function(){
            let expectedArr = [30, 150];
            list.remove(1);
            expect(list.list.toString()).to.be.equal(expectedArr.toString())
        });
    });
    describe("get index", function(){
        it('from three elements, first should be the middle number', function(){
            list.add(10);
            list.add(5);
            list.add(30);
            expect(list.get(1)).to.be.equal(10)
        });

        it('from three elements, index 2 should be the last number', function(){
            list.add(10);
            list.add(5);
            list.add(30);
            expect(list.get(2)).to.be.equal(30)
        });
    });
});