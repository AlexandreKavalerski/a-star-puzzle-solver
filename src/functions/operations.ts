import { State, StateItem } from "../utils/state";
import { operations } from "../utils/operations";

function applyOperation(state: State, op: operations){
    if(op == operations.up){
        return moveUpOperation(state);
    }

    return state;
}

function moveUpOperation(state: State){
    const nullPosition = getPositionOfNullItem(state); //TODO: criar um type para ItemPosition
    const newLinePosition = nullPosition[0] - 1;
    if(newLinePosition >= 0){

        const newState: State = [... state];
        const aux = state[newLinePosition][nullPosition[1]]
        newState[newLinePosition][nullPosition[1]] = null;
        newState[nullPosition[0]][nullPosition[1]] = aux;
        return newState;        
    }
}

function moveRightOperation(state: State){

}

function moveDownOperation(state: State){

}

function moveLeftOperation(state: State){

}



function getPositionOfNullItem(state: State){
    for (let line in state){
        let col = state[line].indexOf(null);
        if (col > -1){
            return [Number(line), Number(col)]; //TODO: criar um type para ItemPosition
        }
    }
    throw new Error('Error: null item not found on state');
}

export { applyOperation, moveUpOperation, moveRightOperation, moveDownOperation, moveLeftOperation, getPositionOfNullItem }