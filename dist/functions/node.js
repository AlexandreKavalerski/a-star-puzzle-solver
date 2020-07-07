"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readNode = exports.generateNode = exports.generateNodeList = void 0;
var operations_1 = require("./../utils/operations");
var Node_1 = require("../classes/Node");
var heuristic_1 = require("./heuristic");
var operations_2 = require("./operations");
var HeuristicValue_1 = __importDefault(require("../classes/HeuristicValue"));
var state_1 = require("./state");
function generateNodeList(node, goalState) {
    var childrenNodes = [];
    var childUp = generateAndTest(operations_1.operations.up, node, goalState, node.evaluationFunctionValue.g);
    if (childUp) {
        childrenNodes.push(childUp);
    }
    var childRight = generateAndTest(operations_1.operations.right, node, goalState, node.evaluationFunctionValue.g);
    if (childRight) {
        childrenNodes.push(childRight);
    }
    var childDown = generateAndTest(operations_1.operations.down, node, goalState, node.evaluationFunctionValue.g);
    if (childDown) {
        childrenNodes.push(childDown);
    }
    var childLeft = generateAndTest(operations_1.operations.left, node, goalState, node.evaluationFunctionValue.g);
    if (childLeft) {
        childrenNodes.push(childLeft);
    }
    return childrenNodes;
}
exports.generateNodeList = generateNodeList;
function generateAndTest(op, node, goalState, gValue) {
    var newState = operations_2.applyOperation(node.state, op);
    if (newState) {
        return generateNode(newState, op, goalState, (gValue + 1), node);
    }
    return null;
}
function generateNode(state, op, goalState, gValue, previousNode) {
    var hValue = heuristic_1.calcHValue(state, goalState);
    var heuristicValue = new HeuristicValue_1.default(gValue, hValue, (gValue + hValue));
    if (previousNode) {
        if (heuristicValue.h > previousNode.evaluationFunctionValue.h) {
            if (previousNode.evaluationFunctionValue.f > heuristicValue.f) {
                heuristicValue.f = previousNode.evaluationFunctionValue.f; //Add consistence to h value
            }
        }
    }
    return new Node_1.NodeInfo(heuristicValue, op, state, previousNode);
}
exports.generateNode = generateNode;
function readNode(node) {
    state_1.readState(node.state);
    if (node.previousNode) {
        return readNode(node.previousNode);
    }
    else {
        return node;
    }
}
exports.readNode = readNode;
//# sourceMappingURL=node.js.map