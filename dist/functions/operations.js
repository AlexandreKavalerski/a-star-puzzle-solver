"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPositionOfBlankItem = exports.moveLeftOperation = exports.moveDownOperation = exports.moveRightOperation = exports.moveUpOperation = exports.applyOperation = void 0;
var operations_1 = require("../utils/operations");
var StateItemPosition_1 = __importDefault(require("../classes/StateItemPosition"));
function applyOperation(state, op) {
    switch (op) {
        case operations_1.operations.up:
            return moveUpOperation(state);
            break;
        case operations_1.operations.right:
            return moveRightOperation(state);
            break;
        case operations_1.operations.down:
            return moveDownOperation(state);
            break;
        case operations_1.operations.left:
            return moveLeftOperation(state);
            break;
    }
}
exports.applyOperation = applyOperation;
function moveUpOperation(state) {
    var nullPosition = getPositionOfBlankItem(state);
    var newLinePosition = nullPosition.line - 1;
    if (newLinePosition >= 0) {
        var newPosition = new StateItemPosition_1.default(newLinePosition, nullPosition.col);
        return changePositions(nullPosition, newPosition, state);
    }
    return null;
}
exports.moveUpOperation = moveUpOperation;
function moveRightOperation(state) {
    var nullPosition = getPositionOfBlankItem(state);
    var newColPosition = nullPosition.col + 1;
    if (newColPosition <= 2) {
        var newPosition = new StateItemPosition_1.default(nullPosition.line, newColPosition);
        return changePositions(nullPosition, newPosition, state);
    }
    return null;
}
exports.moveRightOperation = moveRightOperation;
function moveDownOperation(state) {
    var nullPosition = getPositionOfBlankItem(state);
    var newLinePosition = nullPosition.line + 1;
    if (newLinePosition <= 2) {
        var newPosition = new StateItemPosition_1.default(newLinePosition, nullPosition.col);
        return changePositions(nullPosition, newPosition, state);
    }
    return null;
}
exports.moveDownOperation = moveDownOperation;
function moveLeftOperation(state) {
    var nullPosition = getPositionOfBlankItem(state);
    var newColPosition = nullPosition.col - 1;
    if (newColPosition >= 0) {
        var newPosition = new StateItemPosition_1.default(nullPosition.line, newColPosition);
        return changePositions(nullPosition, newPosition, state);
    }
    return null;
}
exports.moveLeftOperation = moveLeftOperation;
function getPositionOfBlankItem(state) {
    for (var line in state) {
        var col = state[line].indexOf(0);
        if (col > -1) {
            return new StateItemPosition_1.default(Number(line), Number(col));
        }
    }
    throw new Error('Error: null item not found on state');
}
exports.getPositionOfBlankItem = getPositionOfBlankItem;
function changePositions(actualPosition, newPosition, state) {
    var newState = cloneState(state); //TODO: Encontrar uma estratégia otimizada pra clonar o array do estado
    var aux = state[newPosition.line][newPosition.col];
    newState[newPosition.line][newPosition.col] = 0;
    newState[actualPosition.line][actualPosition.col] = aux;
    return newState;
}
function cloneState(state) {
    var newState = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (var l in state) {
        for (var c in state) {
            newState[l][c] = state[l][c];
        }
    }
    return newState;
}
//# sourceMappingURL=operations.js.map