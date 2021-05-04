const assert = require('assert');
const Room = require('../room.js');

let room;

describe('Room', function() {
    beforeEach(function() {
        room = new Room(12);
    });

    it ('should have an area in square metres', function() {
        const actual = room.area;
        assert.strictEqual(actual, 12);
    })
});