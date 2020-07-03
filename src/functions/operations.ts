import { State, StateItem } from "../utils/state";
import { operations } from "../utils/operations";
import StateItemPosition from "../classes/StateItemPosition";

function applyOperation(state: State, op: operations){
    if(op == operations.up){
        return moveUpOperation(state);
    }

    return state;
}

function moveUpOperation(state: State){
    const nullPosition = getPositionOfNullItem(state);
    const newLinePosition = nullPosition.line - 1;
    if(newLinePosition >= 0){

        const newState: State = [... state];
        const aux = state[newLinePosition][nullPosition.col]
        newState[newLinePosition][nullPosition.col] = null;
        newState[nullPosition.line][nullPosition.col] = aux;
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
            return new StateItemPosition(Number(line), Number(col));
        }
    }
    throw new Error('Error: null item not found on state');
}

export { applyOperation, moveUpOperation, moveRightOperation, moveDownOperation, moveLeftOperation, getPositionOfNullItem }