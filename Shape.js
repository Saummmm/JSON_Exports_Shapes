class Shape{
    constructor(newX,newY) {
        let __x__;
        let __y__;

        this.setX = function (x) {
            __x__ = (x>=0)?x:0;
        }
        this.getX = function() {
            return __x__;
        }
        this.setY = function (y) {
            __y__ = (y>=0)?y:0;
        }
        this.getY = function() {
            return __y__
        }

        this.setX(newX);
        this.setY(newY);
    }

    showPoint() {
        console.log(this.getX() + "," + this.getY())
    }

    createHorizontalOffset(offset) {
        if (offset === undefined)
            offset = this.getX()
        let emptySpace = ""
        for (let i=0; i<offset; i++)
            emptySpace += " "
            return emptySpace;
    }

    draw() {
        for (let i=0; i< this.getY(); i++)
            console.log();
    }
    displayInfo() {
        return "Shape with main point at: " + this.getX() + "," + this.getY();
    }
}

module.exports = Shape;