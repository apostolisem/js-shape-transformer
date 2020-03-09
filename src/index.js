// import the required modules
const filterMod = require('./modules/modFilters');
const transformMod = require('./modules/modTransforms');

module.exports = {
    // returns an array with filtered and transformed shapes
    mainApp: (allShapes = [], allOps = []) => {

        const filteredShapes = filterMod.filterArr(allShapes, allOps);
        const transformedShapes = transformMod.transArr(filteredShapes, allOps);
        return transformedShapes;

    }
};
