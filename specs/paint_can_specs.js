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
})