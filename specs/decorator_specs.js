const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint_Can = require('../paint_can');
const Room = require('../room')

let decorator;
let paint_can;
let room;

describe('Dectorator', function() {
    beforeEach(function() {
        decorator = new Decorator();
        paint_can = new Paint_Can(10);
        paint_can2 = new Paint_Can(5);
        room = new Room(8, false);
    });

    it('should start with zero paint cans in stock', function() {
        const actual = decorator.paint_stock;
        assert.deepStrictEqual(actual, [])
    });

    it('should be able to add paint can to stock', function () {
        decorator.addPaintCan(paint_can)
        decorator.addPaintCan(paint_can2)
        const actual = decorator.paint_stock.length;
        assert.deepStrictEqual(actual, 2)
    });

    it('should be able to total all paint in stock', function () {
        decorator.addPaintCan(paint_can);
        const actual = decorator.totalPaint();
        assert.deepStrictEqual(actual, 10);
    });

    it('can check if decorator has enough paint to paint a room', function () {
        decorator.addPaintCan(paint_can);
        const actual = decorator.checkAbleToPaintRoom(room);
        assert.deepStrictEqual(actual, true);
    });

    it('will paint a room if there is enough paint', function () {
        decorator.addPaintCan(paint_can);
        decorator.paintRoom(room);
        const actual = room.painted;
        assert.deepStrictEqual(actual, true);
    });
});