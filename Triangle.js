const Shape = require('./Shape.js');

class Triangle extends Shape {
    constructor(x,y,newHeight) {
        super(x,y);
        var __height__;

        this.setHeight = function (height) {
            __height__ = (height > 0)? height : 1;
        }

        this.getHeight = function () {
            return __height__;
        }

        this.setHeight(newHeight);
    }

    draw() {
        super.draw()
        let triangle = "";

        for (let i = 0; i<this.getHeight(); i++) {
            let line = "\n" + this.createHorizontalOffset(this.getX() - i);

            for (let j = 0; j<((i*2) + 1); j++)
                line += "*";
            
            triangle += line;
        }

        console.log(triangle);
    }

    displayInfo() {
        return "Triangle " + super.displayInfo();
    }
}

module.exports = Triangle;