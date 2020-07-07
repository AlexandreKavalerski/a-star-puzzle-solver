import { State } from "../utils/state";
import { NodeInfo } from "../classes/Node";
import { areEqual, includes, isSolvable } from "./state";
import { generateNodeList } from "./node";
import Result from "../classes/Result";


function runAStarLoop(goalState: State, frontier: NodeInfo[], expandedStates: State[]){
    let actualNode = frontier.shift();
    let iterations = 0;
    if(actualNode){
        while(!areEqual(actualNode.state, goalState)){
            const children = generateNodeList(actualNode, goalState);
            for (let c of children){
                if(!includes(c.state, expandedStates)){ //Only add to frontier states not openned yet
                    if(isSolvable(c.state)){ //Only add to frontier solvable states
                        frontier.push(c);
                    }
                    expandedStates.push(actualNode.state);
                }
            }

            frontier.sort((a, b) => (a.evaluationFunctionValue.f < b.evaluationFunctionValue.f) ? -1 : ((a.evaluationFunctionValue.f === b.evaluationFunctionValue.f) ? ((a.evaluationFunctionValue.h < b.evaluationFunctionValue.h) ? -1 : 1): 1)); // Order frontier according to heuristic value of nodes       

            const aux = frontier.shift();
            iterations += 1;
            if(aux){
                actualNode = aux;
            }else{
                throw new Error('Empty frontier');
            }
        }
        return new Result(actualNode.evaluationFunctionValue.g, iterations, expandedStates.length, actualNode);
    }
}

export { runAStarLoop as run }