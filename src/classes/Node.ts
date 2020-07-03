class NodeInfo {
    evaluationFunctionValue: number;
    operation: string; // TODO: usar types/enum pra permitir somente operações válidas
    state: number[][] // TODO: usar types/tuplas pra permitir somente números válidos
    previousNode?: NodeInfo

    constructor(efValue: number, op: string, s: number[][], prev: NodeInfo){
        this.evaluationFunctionValue = efValue
        this.operation = op
        this.state = s
        this.previousNode = prev
    }
}

export { NodeInfo }