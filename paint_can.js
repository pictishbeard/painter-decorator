const Paint_Can = function(paint_volume) {
    this.paint_volume = paint_volume;
}


Paint_Can.prototype.checkEmpty = function() {
    if (this.paint_volume === 0) {
        return true;
    } else {
        return false;
    };
};

Paint_Can.prototype.empty = function() {
    this.paint_volume = 0;
}

module.exports = Paint_Can;