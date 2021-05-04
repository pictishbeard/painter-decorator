const assert = require('assert');
const Decorator = require('../decorator.js');

let decorator;

describe('Dectorator', function() {
    beforeEach(function() {
        decorator = new Decorator()
    });

    it('should start with zero paint cans in stock', function() {
        const actual = decorator.paint_stock;
        assert.deepStrictEqual(actual, [])
    });
});