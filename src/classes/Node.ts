import { operations } from "../utils/operations";
import HeuristicValue from "./HeuristicValue";

class NodeInfo {
    evaluationFunctionValue: HeuristicValue;
    operation: operations;
    state: (number | null)[][];
    previousNode?: NodeInfo;

    constructor(efValue: HeuristicValue, op: operations, s: (number | null)[][], prev?: NodeInfo){
        this.evaluationFunctionValue = efValue
        this.operation = op
        this.state = s
        this.previousNode = prev
    }
}

export { NodeInfo }