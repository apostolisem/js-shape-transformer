module.exports = {

    // returns an array with the shapes that meet our filters passed 
    filterArr: (shapeArr, allOps) => {

    let result;

    // keep only the filters from our operators
    const allFilters = allOps.filter( (op) => {
        return op.hasOwnProperty("filter");
    });

    // create a new array with the shapes that pass the filters only
    const newShapeArr = shapeArr.filter((shape) => {
       
        // check if 'every' filter is passed by each shape
        result = allFilters.every(filter => {
            switch (filter.filter) {
                // check shapes against area filter
                case "area":
                    if (shape.hasOwnProperty('width')) { // means shape is square or rectangle
                        let theHeight = (shape.hasOwnProperty('height')) ? shape.height : shape.width;
                        result = Compare(shape.width * theHeight, filter.operator, filter.value);
                    } else if (shape.hasOwnProperty('radius')) { // means shape is a circle
                        result = Compare(Math.PI * shape.radius * shape.radius, filter.operator, filter.value);
                    }
                    break;
                // check circles against circumference filter
                case "circumference":
                    if (shape.hasOwnProperty('radius')) { // means shape is a circle
                        result = Compare(Math.PI * 2 * shape.radius, filter.operator, filter.value);
                    }
                    break;
                default:
                    result = true; // true by default
                    break;
            }
            return result;
        });
        return result;
    });

    // return the filtered array
    return newShapeArr;

}

};

// Returns true if the shape passes the filter operator or else false
let Compare = (shapeValue, filterOp, opValue) => {

    switch (filterOp) {
        case "gt":
            result = (shapeValue > opValue); // greater than
            break;
        case "lt":
            result = (shapeValue < opValue); // less than
            break;        
        case "in":
            result = ((shapeValue > opValue[0]) && (shapeValue < opValue[1])); // in range
            break;
        default:
            result = true; // default true if not another case
            break;
    }

    return result;
}