
import { operations } from "../utils/operations";
import StateItemPosition from "../classes/StateItemPosition";

function applyOperation(state: (number | null)[][], op: operations){
    switch (op){
        case operations.up:
            return moveUpOperation(state);
            break;
        case operations.right:
            return moveRightOperation(state);
            break;
        case operations.down:
            return moveDownOperation(state);
            break;
        case operations.left:
            return moveLeftOperation(state);
            break;
    }
}

function moveUpOperation(state: (number | null)[][]): (number | null)[][] | null{
    const nullPosition = getPositionOfNullItem(state);
    const newLinePosition = nullPosition.line - 1;
    if(newLinePosition >= 0){
        const newPosition = new StateItemPosition(newLinePosition, nullPosition.col);
        return changePositions(nullPosition, newPosition, state);        
    }
    return null;
}

function moveRightOperation(state: (number | null)[][]): (number | null)[][] | null{
    const nullPosition = getPositionOfNullItem(state);
    
    const newColPosition = nullPosition.col + 1;
    if(newColPosition <= 2){
        const newPosition = new StateItemPosition(nullPosition.line, newColPosition);
        return changePositions(nullPosition, newPosition, state);
    }
    return null;
}

function moveDownOperation(state: (number | null)[][]): (number | null)[][] | null{
    const nullPosition = getPositionOfNullItem(state);
    const newLinePosition = nullPosition.line + 1;
    if(newLinePosition <= 2){
        const newPosition = new StateItemPosition(newLinePosition, nullPosition.col);
        return changePositions(nullPosition, newPosition, state);        
    }
    return null;
}

function moveLeftOperation(state: (number | null)[][]): (number | null)[][] | null{
    const nullPosition = getPositionOfNullItem(state);

    const newColPosition = nullPosition.col - 1;
    if(newColPosition >= 0){
        const newPosition = new StateItemPosition(nullPosition.line, newColPosition);
        return changePositions(nullPosition, newPosition, state);
    }
    return null;
}


function getPositionOfNullItem(state: (number | null)[][]){
    for (let line in state){
        let col = state[line].indexOf(null);
        if (col > -1){
            return new StateItemPosition(Number(line), Number(col));
        }
    }
    throw new Error('Error: null item not found on state');
}

function changePositions(actualPosition: StateItemPosition, newPosition: StateItemPosition, state: (number | null)[][]): (number | null)[][]{
    const newState: (number | null)[][] = cloneState(state); //TODO: Encontrar uma estratégia otimizada pra clonar o array do estado
    const aux = state[newPosition.line][newPosition.col];

    newState[newPosition.line][newPosition.col] = null;
    newState[actualPosition.line][actualPosition.col] = aux;
    
    return newState
}

function cloneState(state: (number | null)[][]){
    let newState: (number | null)[][] = [[null, null, null], [null, null, null], [null, null, null]];
    for (let l in state){
        for (let c in state){
            newState[l][c] = state[l][c];
        }
    }
    return newState;
}

export { applyOperation, moveUpOperation, moveRightOperation, moveDownOperation, moveLeftOperation, getPositionOfNullItem }