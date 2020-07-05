import { operations } from './utils/operations';
import { State } from "./utils/state";
import { NodeInfo } from "./classes/Node";
import { generateNodeList, generateNode, readNode } from './functions/node';
import { areEqual, includes } from './functions/state';

// const initialState: State = [[4,5,8], [null,1,6], [7, 2, 3]];
const initialState: State = [[1,2,3], [5,4,6], [7, null, 8]];
const finalState: State = [[1,2,3], [4,5,6], [7, 8, null]];

const firstNode = generateNode(initialState, operations.none, finalState, 0);

let frontier: NodeInfo[] = [firstNode];
let expandedStates: State[] = [];

const finalNode = run(finalState, frontier, expandedStates);
if(finalNode){
    readNode(finalNode);
}

function run(goalState: State, frontier: NodeInfo[], expandedStates: State[]){
    let actualNode = frontier.shift();
    if(actualNode){
        while(!areEqual(actualNode.state, goalState)){
            const children = generateNodeList(actualNode, goalState);
            for (let c of children){
                if(!includes(c.state, expandedStates)){//Only add to frontier states not openned yet
                    frontier.push(c);
                    expandedStates.push(actualNode.state);
                }
            }

            frontier.sort((a, b) => (a.evaluationFunctionValue.f < b.evaluationFunctionValue.f) ? -1 : ((a.evaluationFunctionValue.f === b.evaluationFunctionValue.f) ? ((a.evaluationFunctionValue.h < b.evaluationFunctionValue.h) ? -1 : 1): 1)); // Order frontier according to heuristic value of nodes

            const aux = frontier.shift();
            if(aux){
                actualNode = aux;
            }else{
                throw new Error('Empty frontier');
            }
        }
        return actualNode;
    }
}