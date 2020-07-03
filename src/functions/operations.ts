import { State, StateItem } from "../utils/state";
import { operations } from "../utils/operations";
import StateItemPosition from "../classes/StateItemPosition";

function applyOperation(state: State, op: operations){
    if(op == operations.up){
        return moveUpOperation(state);
    } else if (op == operations.right){
        return moveRightOperation(state);
    } else if(op == operations.down){
        return moveDownOperation(state);
    } else if (op == operations.left){
        return moveLeftOperation(state);
    }

    return state;
}

function moveUpOperation(state: State){
    const nullPosition = getPositionOfNullItem(state);
    const newLinePosition = nullPosition.line - 1;
    if(newLinePosition >= 0){
        const newPosition = new StateItemPosition(newLinePosition, nullPosition.col);
        return changePositions(nullPosition, newPosition, state);        
    }
}

function moveRightOperation(state: State){
    const nullPosition = getPositionOfNullItem(state);
    
    const newColPosition = nullPosition.col + 1;
    if(newColPosition <= 2){
        const newPosition = new StateItemPosition(nullPosition.line, newColPosition);
        return changePositions(nullPosition, newPosition, state);
    }
}

function moveDownOperation(state: State){
    const nullPosition = getPositionOfNullItem(state);
    const newLinePosition = nullPosition.line + 1;
    if(newLinePosition <= 2){
        const newPosition = new StateItemPosition(newLinePosition, nullPosition.col);
        return changePositions(nullPosition, newPosition, state);        
    }
}

function moveLeftOperation(state: State){
    const nullPosition = getPositionOfNullItem(state);

    const newColPosition = nullPosition.col - 1;
    if(newColPosition >= 0){
        const newPosition = new StateItemPosition(nullPosition.line, newColPosition);
        return changePositions(nullPosition, newPosition, state);
    }
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

function changePositions(actualPosition: StateItemPosition, newPosition: StateItemPosition, state: State){
    const newState = [...state];
    const aux = state[newPosition.line][newPosition.col];

    newState[newPosition.line][newPosition.col] = null;
    newState[actualPosition.line][actualPosition.col] = aux;

    return newState
}

export { applyOperation, moveUpOperation, moveRightOperation, moveDownOperation, moveLeftOperation, getPositionOfNullItem }