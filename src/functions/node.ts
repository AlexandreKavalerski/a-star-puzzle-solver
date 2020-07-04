import { operations } from './../utils/operations';
import { NodeInfo } from "../classes/Node"
import { State } from '../utils/state';
import { calcHeuristicValue } from './heuristic';
import { applyOperation } from './operations';

function generateNodeList(node: NodeInfo, goalState: State, gValue: number): NodeInfo[]{
    let childrenNodes: NodeInfo[] = [];
    const childUp = generateAndTest(operations.up, node, goalState, gValue);
    if (childUp){
        childrenNodes.push(childUp);
    }
    const childRight = generateAndTest(operations.right, node, goalState, gValue);
    if (childRight){
        childrenNodes.push(childRight);
    }
    const childDown = generateAndTest(operations.down, node, goalState, gValue);
    if (childDown){
        childrenNodes.push(childDown);
    }
    const childLeft = generateAndTest(operations.left, node, goalState, gValue);
    if (childLeft){
        childrenNodes.push(childLeft);
    }
       
    return childrenNodes.sort((a, b) => (a.evaluationFunctionValue < b.evaluationFunctionValue) ? -1 : 1);
}

function generateAndTest(op: operations, node: NodeInfo, goalState: State, gValue: number): NodeInfo | null{
    const newState = applyOperation(node.state, op);
    if(newState){
        return generateNode(newState, op, goalState, (gValue+1), node);
    }
    return null;
}

function generateNode(state: State, op: operations, goalState: State, gValue: number, previousNode?: NodeInfo): NodeInfo{
    const heuristicValue = calcHeuristicValue(state, goalState, gValue);
    return new NodeInfo(heuristicValue, op, state, previousNode);
}

export { generateNodeList, generateNode }