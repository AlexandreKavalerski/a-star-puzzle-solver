import { State, StateItem } from "../utils/state";
import { operations } from "../utils/operations";
import StateItemPosition from "../classes/StateItemPosition";

function applyOperation(state: State, op: operations){
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

function moveUpOperation(state: State): State | null{
    const nullPosition = getPositionOfBlankItem(state);
    const newLinePosition = nullPosition.line - 1;
    if(newLinePosition >= 0){
        const newPosition = new StateItemPosition(newLinePosition, nullPosition.col);
        return changePositions(nullPosition, newPosition, state);        
    }
    return null;
}

function moveRightOperation(state: State): State | null{
    const nullPosition = getPositionOfBlankItem(state);
    
    const newColPosition = nullPosition.col + 1;
    if(newColPosition <= 2){
        const newPosition = new StateItemPosition(nullPosition.line, newColPosition);
        return changePositions(nullPosition, newPosition, state);
    }
    return null;
}

function moveDownOperation(state: State): State | null{
    const nullPosition = getPositionOfBlankItem(state);
    const newLinePosition = nullPosition.line + 1;
    if(newLinePosition <= 2){
        const newPosition = new StateItemPosition(newLinePosition, nullPosition.col);
        return changePositions(nullPosition, newPosition, state);        
    }
    return null;
}

function moveLeftOperation(state: State): State | null{
    const nullPosition = getPositionOfBlankItem(state);

    const newColPosition = nullPosition.col - 1;
    if(newColPosition >= 0){
        const newPosition = new StateItemPosition(nullPosition.line, newColPosition);
        return changePositions(nullPosition, newPosition, state);
    }
    return null;
}


function getPositionOfBlankItem(state: State){
    for (let line in state){
        let col = state[line].indexOf(0);
        if (col > -1){
            return new StateItemPosition(Number(line), Number(col));
        }
    }
    throw new Error('Error: null item not found on state');
}

function changePositions(actualPosition: StateItemPosition, newPosition: StateItemPosition, state: State): State{
    const newState: State = cloneState(state); //TODO: Encontrar uma estratégia otimizada pra clonar o array do estado
    const aux = state[newPosition.line][newPosition.col];

    newState[newPosition.line][newPosition.col] = 0;
    newState[actualPosition.line][actualPosition.col] = aux;
    
    return newState
}

function cloneState(state: State){
    let newState: State = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (let l in state){
        for (let c in state){
            newState[l][c] = state[l][c];
        }
    }
    return newState;
}

export { applyOperation, moveUpOperation, moveRightOperation, moveDownOperation, moveLeftOperation, getPositionOfBlankItem }