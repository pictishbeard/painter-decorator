const Room = require('../models/room');

const Decorator = function (paint_stock) {
    this.paint_stock = [];
};

Decorator.prototype.addPaintCan = function (paint_can) {
    this.paint_stock.push(paint_can)
};

Decorator.prototype.totalPaint = function () {
    let total = 0;
    for (let currentPaint of this.paint_stock) {
        total += currentPaint.paint_volume;
    };
    return total;
};

Decorator.prototype.checkAbleToPaintRoom = function (room) {
    const total_paint = this.totalPaint();
    if (room.area <= total_paint) {
        return true;
    } else {
        return false;
    };
};

Decorator.prototype.paintRoom = function (room) {
    roomCheck = this.checkAbleToPaintRoom(room)
    if (roomCheck === true) {
        room.paintRoom();
    } else {
        console.log('Not enough paint...');
    };
};

module.exports = Decorator;