const assert = require('assert');
const Paint_Can = require('../paint_can.js');

let paint_can;

describe('Paint Can', function () {
    beforeEach(function () {
        paint_can = new Paint_Can(12);
    });

    it('should have paint in can', function() {
        const actual = paint_can.paint_volume;
        assert.strictEqual(actual, 12);
    });

    it('can check to see if it\'s empty', function() {
        const actual = paint_can.checkEmpty();
        assert.strictEqual(actual, false);
    });

    it('should be able to empty itself', function() {
        paint_can.empty();
        const actual = paint_can.checkEmpty();
        assert.strictEqual(actual, true);
    })
})