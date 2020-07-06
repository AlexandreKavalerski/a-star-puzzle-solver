import { State, StateItem } from "../utils/state";


// Using this function because literal comparison between 2 types (state1 == state2) always return false
// TODO: melhorar formato de verificação
function areEqual(state1: State, state2: State){ 
    const equal = true;
    for (let l in state1){
        for (let c in state1){
            if(!(state1[l][c] == state2[l][c])){
                return false;
            }
        }
    }
    return true;
}

// TODO: melhorar formato de verificação
function includes(state: State, list: State[]){
    for (let s of list){
        if(areEqual(s, state)){
            return true;
        }
    }
    return false;
}

function isSolvable(state: State){
    return quantityOfInversions(state) % 2 === 0;
}

function quantityOfInversions(state: State): number{
    const stateList = convertStateInArray(state);
    let inversions = 0;
    for(let i in stateList){
        for (let j = Number(i)+1; j < stateList.length; j ++){
            if(stateList[i] > stateList[j]){
                inversions++;
            }
        }
    }    
    return inversions;
}

//TODO: Melhorar a forma de fazer isso
function convertStateInArray(state: State): StateItem[]{
    let stateList: StateItem[] = [];
    for(let l in state){
        for (let c in state[l]){
            if(state[l][c] !== 0){// Do not consider 0 when counting inversions
                stateList.push(state[l][c]);
            }
        }
    }
    return stateList;
}

function readState(state: State){
    console.log('---------');
    for(let l of state){
        console.log(l);
    }
    console.log('---------'); 
}

export { areEqual, includes, readState, isSolvable }