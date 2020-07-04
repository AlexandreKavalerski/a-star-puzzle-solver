import { operations } from './utils/operations';
import { State } from "./utils/state";
import { NodeInfo } from "./classes/Node";
import { generateNodeList, generateNode, readNode } from './functions/node';
import { areEqual, includes } from './functions/state';

const initialState: State = [[4,5,8], [5,4,6], [7, null, 8]];
const finalState: State = [[1,2,3], [4,5,6], [7, 8, null]];

const firstNode = generateNode(initialState, operations.none, finalState, 0);

let frontier: NodeInfo[] = [firstNode];
let expandedStates: State[] = [];



const finalNode = run(finalState, frontier, expandedStates);
readNode(finalNode);

function run(goalState: State, frontier: NodeInfo[], expandedStates: State[]): NodeInfo{
    const actualNode = frontier.shift();
    if(actualNode){        
        if (areEqual(actualNode.state, goalState)){
            return actualNode;
        }
        else{
            if(!includes(actualNode.state, expandedStates)){ //Check if actual state wasn't already openned
                const children = generateNodeList(actualNode, goalState);
                for (let c of children){
                    frontier.push(c);
                }
                expandedStates.push(actualNode.state);
            }
            
            frontier.sort((a, b) => (a.evaluationFunctionValue.f < b.evaluationFunctionValue.f) ? -1 : ((a.evaluationFunctionValue.f === b.evaluationFunctionValue.f) ? ((a.evaluationFunctionValue.g > b.evaluationFunctionValue.g) ? -1 : 1): 1)); // Order frontier according to heuristic value of nodes
            
            return run(goalState, frontier, expandedStates);
        }
    }else{        
        throw new Error('Empty frontier');
    }
}