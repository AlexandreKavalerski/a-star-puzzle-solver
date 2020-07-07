"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solvePuzzle = void 0;
var operations_1 = require("./utils/operations");
var node_1 = require("./functions/node");
var state_1 = require("./functions/state");
function AStar(initialState, finalState) {
    var goalState = finalState ? finalState : [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
    if (state_1.isSolvable(initialState)) {
        var firstNode = node_1.generateNode(initialState, operations_1.operations.none, goalState, 0);
        var frontier = [firstNode];
        var expandedStates = [];
        var finalNode = runAStarLoop(goalState, frontier, expandedStates);
        return finalNode;
    }
    else {
        throw new Error('Initial state is not solvable');
    }
}
exports.solvePuzzle = AStar;
function runAStarLoop(goalState, frontier, expandedStates) {
    var actualNode = frontier.shift();
    if (actualNode) {
        while (!state_1.areEqual(actualNode.state, goalState)) {
            var children = node_1.generateNodeList(actualNode, goalState);
            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                var c = children_1[_i];
                if (!state_1.includes(c.state, expandedStates)) { //Only add to frontier states not openned yet
                    if (state_1.isSolvable(c.state)) { //Only add to frontier solvable states
                        frontier.push(c);
                    }
                    expandedStates.push(actualNode.state);
                }
            }
            frontier.sort(function (a, b) { return (a.evaluationFunctionValue.f < b.evaluationFunctionValue.f) ? -1 : ((a.evaluationFunctionValue.f === b.evaluationFunctionValue.f) ? ((a.evaluationFunctionValue.h < b.evaluationFunctionValue.h) ? -1 : 1) : 1); }); // Order frontier according to heuristic value of nodes       
            var aux = frontier.shift();
            if (aux) {
                actualNode = aux;
            }
            else {
                throw new Error('Empty frontier');
            }
        }
        return actualNode;
    }
}
//# sourceMappingURL=index.js.map