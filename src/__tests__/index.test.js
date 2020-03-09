// import the index.js
const index = require('../index');

// start testing
describe("Filtered and Transformed Shapes Assessment", () => {

    // run before every test
    beforeEach(() => {
        jest.resetModules();
    });

    // test #1 - no filters or transformation
    test("Test without filters or Transformations", () => { 
        // setting test variables
        const shapes = require("./shapes.json");
        const output = require("./shapes.json");
        operators = [];
        expect(index.mainApp(shapes, operators)).toMatchObject(output); 
    });

    // test #2 - apply some filters and transformations
    test("Shapes filtered and Scaled up by 2", () => { 
        
        // setting test variables
        const shapes = require("./shapes.json");
        const operators = [
            {
                "filter": "area",
                "operator": "gt",
                "value": 150
            },
            {
                "transform": "scale",
                "factor": 2
            }
        ];
        const output = require("./output2.json");

        expect(index.mainApp(shapes, operators)).toMatchObject(output);  
    });

    // test #3 - apply some filters and transformations
    test("Move, Filter and Scale up by 3", () => { 

        // setting test variables
        const shapes =  require("./shapes.json");
        const operators = [
            {
                "filter": "area",
                "operator": "gt",
                "value": 400
            },
            {
                "transform": "scale",
                "factor": 3
            },
            {
                "transform": "move",
                "x": -30,
                "y": 30
            }
        ];
        const output = require("./output3.json");

        expect(index.mainApp(shapes, operators)).toMatchObject(output);  
    });
  });
