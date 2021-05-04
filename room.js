const Room = function(area, painted) {
    this.area = area;
    this.painted = false;
}

Room.prototype.paintRoom = function() {
    this.painted = true;
}


module.exports = Room;