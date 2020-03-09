module.exports = {

    // returnes all shapes transformed according to transformations passed
    transArr: (shapeArr, allOps) => {

        let newShapeArr = [];

        // keep only the transformations from operators
        const allTransforms = allOps.filter( (op) => {
            return op.hasOwnProperty("transform");
        })

        // run every transformations for each shape
        shapeArr.forEach((shape) => {
            allTransforms.forEach(transform => {
                switch (transform.transform) {
                    case "scale": // transform the area of each shape based on scale factor
                        shape.hasOwnProperty("width") ? shape.width = Math.round(shape.width * transform.factor) : false;
                        shape.hasOwnProperty("height") ? shape.height = Math.round(shape.height * transform.factor) : false;
                        shape.hasOwnProperty("radius") ? shape.radius = Math.round(shape.radius * transform.factor) : false;
                        break;
                    case "move":  // alter the position of each shape
                        shape.x = shape.x + transform.x;
                        shape.y = shape.y + transform.y;
                        break;
                    default:
                        // by default do nothing
                        break;
                }
            });
            // create a new array with the shapes transformed
            newShapeArr.push(shape);
        });
    
        return newShapeArr;
    }

};