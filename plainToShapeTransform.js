let Shape = require('./Shape.js');
let Square = require('./Square');
let Triangle = require('./Triangle');

let plainToShapeTransform = function(data) {
    let shapes = [];
    let s;
    for (let d of data) {
        switch(d.type) {
            case undefined:
                s = new Shape(d.x,d.y);
                break;
            case "Square":
                s = new Square(d.x,d.y,d.length);
                break;
            case "Triangle":
                s = new Triangle(d.x,d.y,d.length);
        }
        shapes.push(s);
    }
    return shapes;
    
}

module.exports = plainToShapeTransform;

