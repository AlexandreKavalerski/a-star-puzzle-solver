"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSolutionFromNode = void 0;
var state_1 = require("./state");
var Solution_1 = __importDefault(require("../classes/Solution"));
function getSolutionFromNode(node, list) {
    if (node.previousNode) {
        list.unshift(new Solution_1.default(state_1.convertStateInArray(node.state), node.operation));
        return getSolutionFromNode(node.previousNode, list);
    }
    return list;
}
exports.getSolutionFromNode = getSolutionFromNode;
//# sourceMappingURL=solution.js.map