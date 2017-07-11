let list = require('../add-delete-in-list').list;
let expect = require('chai').expect;

describe('list', function () {
    let lis;
    beforeEach(function(){ lis = (function(){
        return list;
    })();
    });
    it("should correctly add data with correct index", function () {
        lis.add(5);
        lis.add("pesho");
        lis.add(true);
        expect(lis.toString()).to.equal("5, pesho, true");
    });
    it("should correctly delete data with correct index", function () {
        lis.add(5);
        lis.add("pesho");
        lis.delete(0);
        expect(lis.delete(0)).to.equal("pesho");
    });
    it("should return undefined with incorrect index", function () {
        lis.add(5);
        lis.add("pesho");
        lis.delete(34);
        expect(lis.delete(34)).to.equal(undefined);
    });
    it("should return undefined with incorrect index", function () {
        lis.add(5);
        lis.add("pesho");
        lis.delete(3.4);
        expect(lis.delete(3.4)).to.equal(undefined);
    });


});