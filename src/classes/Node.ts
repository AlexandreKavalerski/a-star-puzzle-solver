import { State } from "../utils/state";
import { operations } from "../utils/operations";

class NodeInfo {
    evaluationFunctionValue: number;
    operation: operations;
    state: State;
    previousNode?: NodeInfo;

    constructor(efValue: number, op: operations, s: State, prev?: NodeInfo){
        this.evaluationFunctionValue = efValue
        this.operation = op
        this.state = s
        this.previousNode = prev
    }
}

export { NodeInfo }