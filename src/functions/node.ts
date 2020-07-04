import { operations } from './../utils/operations';
import { NodeInfo } from "../classes/Node"
import { calcHValue } from './heuristic';
import { applyOperation } from './operations';
import HeuristicValue from '../classes/HeuristicValue';
import { readState } from './state';

function generateNodeList(node: NodeInfo, goalState: (number | null)[][]): NodeInfo[]{
    let childrenNodes: NodeInfo[] = [];
    const childUp = generateAndTest(operations.up, node, goalState, node.evaluationFunctionValue.g);
    if (childUp){
        childrenNodes.push(childUp);
    }
    const childRight = generateAndTest(operations.right, node, goalState, node.evaluationFunctionValue.g);
    if (childRight){
        childrenNodes.push(childRight);
    }
    const childDown = generateAndTest(operations.down, node, goalState, node.evaluationFunctionValue.g);
    if (childDown){
        childrenNodes.push(childDown);
    }
    const childLeft = generateAndTest(operations.left, node, goalState, node.evaluationFunctionValue.g);
    if (childLeft){
        childrenNodes.push(childLeft);
    }
       
    return childrenNodes;
}

function generateAndTest(op: operations, node: NodeInfo, goalState: (number | null)[][], gValue: number): NodeInfo | null{
    const newState = applyOperation(node.state, op);
    if(newState){
        return generateNode(newState, op, goalState, (gValue+1), node);
    }
    return null;
}

function generateNode(state: (number | null)[][], op: operations, goalState: (number | null)[][], gValue: number, previousNode?: NodeInfo): NodeInfo{
    const hValue = calcHValue(state, goalState);
    const heuristicValue = new HeuristicValue(gValue, hValue);
    return new NodeInfo(heuristicValue, op, state, previousNode);
}


function readNode(node: NodeInfo): NodeInfo{
    readState(node.state);
    if(node.previousNode){
        return readNode(node.previousNode);
    }
    else{
        return node;
    }
}

export { generateNodeList, generateNode, readNode }