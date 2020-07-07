"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function orderFrontier(frontier) {
    return frontier.sort(function (a, b) { return (a.evaluationFunctionValue.f < b.evaluationFunctionValue.f) ? -1 : 1; });
}
exports.default = orderFrontier;
