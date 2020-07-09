import { State } from "../utils/state";
import { operations } from "../utils/operations";
import HeuristicValue from "./HeuristicValue";
declare class NodeInfo {
    evaluationFunctionValue: HeuristicValue;
    operation: operations;
    state: State;
    previousNode?: NodeInfo;
    constructor(efValue: HeuristicValue, op: operations, s: State, prev?: NodeInfo);
}
export { NodeInfo };
