import { operations } from './../utils/operations';
import { NodeInfo } from "../classes/Node"
import { State } from '../utils/state';
import { calcHeuristicValue } from './heuristic';

function generateNodeList(node: NodeInfo, goalState: State, gValue: number){
    const s: State = [[4,5,8], [null,1,6], [7, 2, 3]];
    const n = new NodeInfo(1, operations.none, s);
    return [n];
}

function generateNode(state: State, op: operations, goalState: State, gValue: number, previousNode?: NodeInfo){
    const heuristicValue = calcHeuristicValue(state, goalState, gValue);
    return new NodeInfo(heuristicValue, op, state, previousNode);
}

export { generateNodeList, generateNode }