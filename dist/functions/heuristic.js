"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcDistanceOfItem = exports.calcHValue = void 0;
var StateItemPosition_1 = __importDefault(require("../classes/StateItemPosition"));
function calcHValue(actualState, goalState) {
    var totalDistance = 0;
    for (var line in actualState) {
        for (var col in actualState[line]) {
            var itemPosition = new StateItemPosition_1.default(Number(line), Number(col));
            totalDistance += calcDistanceOfItem(actualState[line][col], itemPosition, goalState);
        }
    }
    return totalDistance;
}
exports.calcHValue = calcHValue;
function calcDistanceOfItem(item, itemPosition, goalState) {
    for (var line in goalState) {
        var col = goalState[line].indexOf(item);
        if (col > -1) {
            var distance = Math.abs(itemPosition.line - Number(line)) + Math.abs(itemPosition.col - col);
            return distance;
        }
    }
    return 10; //TODO: Rever esse valor (ou tratamento diferente caso o item buscado não exista no estado objetivo)
}
exports.calcDistanceOfItem = calcDistanceOfItem;
//# sourceMappingURL=heuristic.js.map