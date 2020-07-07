import { operations } from './../utils/operations';
import { NodeInfo } from "../classes/Node"
import { State } from '../utils/state';
import { calcHValue } from './heuristic';
import { applyOperation } from './operations';
import HeuristicValue from '../classes/HeuristicValue';

function generateNodeList(node: NodeInfo, goalState: State): NodeInfo[]{
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

function generateAndTest(op: operations, node: NodeInfo, goalState: State, gValue: number): NodeInfo | null{
    const newState = applyOperation(node.state, op);
    if(newState){
        return generateNode(newState, op, goalState, (gValue+1), node);
    }
    return null;
}

function generateNode(state: State, op: operations, goalState: State, gValue: number, previousNode?: NodeInfo): NodeInfo{
    const hValue = calcHValue(state, goalState);
    let heuristicValue = new HeuristicValue(gValue, hValue, (gValue + hValue));
    if(previousNode){
        if(heuristicValue.h > previousNode.evaluationFunctionValue.h){ 
            if(previousNode.evaluationFunctionValue.f > heuristicValue.f ){
                heuristicValue.f = previousNode.evaluationFunctionValue.f; //Add consistence to h value
            }
        }
    }
    return new NodeInfo(heuristicValue, op, state, previousNode);
}

export { generateNodeList, generateNode }