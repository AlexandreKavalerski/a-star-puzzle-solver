import { operations } from './utils/operations';
import { State, StateAsList } from "./utils/state";
import { generateNode } from './functions/node';
import { isSolvable, convertArrayInState, convertStateInArray } from './functions/state';
import { Frontier } from './utils/frontier';
import { run } from './functions/AStar';
import { getSolutionFromNode } from './functions/solution';

function index(state: StateAsList, finalState?: State){
    const initialState = convertArrayInState(state);
    const goalState: State = finalState ? finalState : [[1,2,3],[4,5,6],[7, 8,0]];
    if(isSolvable(initialState)){
        const firstNode = generateNode(initialState, operations.none, goalState, 0);
        let frontier: Frontier = [firstNode];
        let expandedStates: State[] = [];
    
        const result = run(goalState, frontier, expandedStates);
        if(result){
            result.solution = getSolutionFromNode(result.finalNode, []);
            return result;
        }else{
            throw new Error('Unexpected error while processing search');
        }
    }else{
        throw new Error('Initial state is not solvable');
    }
}



export { index as solvePuzzle, convertArrayInState, convertStateInArray, isSolvable }