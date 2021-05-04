const assert = require('assert');
const Room = require('../room.js');

let room;

describe('Room', function() {
    beforeEach(function() {
        room = new Room(12, false);
    });

    it ('should have an area in square metres', function() {
        const actual = room.area;
        assert.strictEqual(actual, 12);
    });

    it('should not start painted', function () {
        const actual = room.painted;
        assert.strictEqual(actual, false);
    });

    it('should be able to be painted', function() {
        room.paintRoom();
        const actual = room.painted;
        assert.strictEqual(actual, true)
    });
});