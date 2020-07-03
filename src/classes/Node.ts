import { State } from "../utils/state";

class NodeInfo {
    evaluationFunctionValue: number;
    operation: string; // TODO: usar types/enum pra permitir somente operações válidas
    state: State;
    previousNode?: NodeInfo;

    constructor(efValue: number, op: string, s: State, prev: NodeInfo){
        this.evaluationFunctionValue = efValue
        this.operation = op
        this.state = s
        this.previousNode = prev
    }
}

export { NodeInfo }