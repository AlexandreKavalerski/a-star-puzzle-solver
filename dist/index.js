"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSolvable = exports.convertStateInArray = exports.convertArrayInState = exports.solvePuzzle = void 0;
var operations_1 = require("./utils/operations");
var node_1 = require("./functions/node");
var state_1 = require("./functions/state");
Object.defineProperty(exports, "isSolvable", { enumerable: true, get: function () { return state_1.isSolvable; } });
Object.defineProperty(exports, "convertArrayInState", { enumerable: true, get: function () { return state_1.convertArrayInState; } });
Object.defineProperty(exports, "convertStateInArray", { enumerable: true, get: function () { return state_1.convertStateInArray; } });
var AStar_1 = require("./functions/AStar");
var solution_1 = require("./functions/solution");
function index(state, finalState) {
    var initialState = state_1.convertArrayInState(state);
    var goalState = finalState ? finalState : [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
    if (state_1.isSolvable(initialState)) {
        var firstNode = node_1.generateNode(initialState, operations_1.operations.none, goalState, 0);
        var frontier = [firstNode];
        var expandedStates = [];
        var result = AStar_1.run(goalState, frontier, expandedStates);
        if (result) {
            result.solution = solution_1.getSolutionFromNode(result.finalNode, []);
            return result;
        }
        else {
            throw new Error('Unexpected error while processing search');
        }
    }
    else {
        throw new Error('Initial state is not solvable');
    }
}
exports.solvePuzzle = index;
//# sourceMappingURL=index.js.map