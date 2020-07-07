"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeInfo = void 0;
var NodeInfo = /** @class */ (function () {
    function NodeInfo(efValue, op, s, prev) {
        this.evaluationFunctionValue = efValue;
        this.operation = op;
        this.state = s;
        this.previousNode = prev;
    }
    return NodeInfo;
}());
exports.NodeInfo = NodeInfo;
//# sourceMappingURL=Node.js.map