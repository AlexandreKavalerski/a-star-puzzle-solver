import { State } from "../utils/state";
import { operations } from "../utils/operations";
import HeuristicValue from "./HeuristicValue";

class NodeInfo {
    evaluationFunctionValue: HeuristicValue;
    operation: operations;
    state: State;
    previousNode?: NodeInfo;

    constructor(efValue: HeuristicValue, op: operations, s: State, prev?: NodeInfo){
        this.evaluationFunctionValue = efValue
        this.operation = op
        this.state = s
        this.previousNode = prev
    }
}

export { NodeInfo }