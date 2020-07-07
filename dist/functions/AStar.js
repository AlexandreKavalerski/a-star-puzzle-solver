"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
var state_1 = require("./state");
var node_1 = require("./node");
var Result_1 = __importDefault(require("../classes/Result"));
function runAStarLoop(goalState, frontier, expandedStates) {
    var actualNode = frontier.shift();
    var iterations = 0;
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
            iterations += 1;
            if (aux) {
                actualNode = aux;
            }
            else {
                throw new Error('Empty frontier');
            }
        }
        return new Result_1.default(actualNode.evaluationFunctionValue.g, iterations, expandedStates.length, actualNode);
    }
}
exports.run = runAStarLoop;
//# sourceMappingURL=AStar.js.map