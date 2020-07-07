import { State, StateItem, StateAsList } from "../utils/state";


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
    let stateList = convertStateInArray(state);
    stateList = stateList.filter((val) => {return val !== 0}); // Do not consider 0 when counting inversions
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
function convertStateInArray(state: State): StateAsList{
    let stateList: StateAsList = [];
    for(let l in state){
        for (let c in state[l]){
            stateList.push(state[l][c]);
        }
    }
    return stateList;
}

//TODO: Melhorar a forma de fazer isso
function convertArrayInState(stateList: StateAsList): State{
    let state: State = [[0,0,0],[0,0,0],[0,0,0]];
    for(let l in state){
        for (let c in state[l]){
            const item = stateList.shift();
            if(item){
                state[l][c] = item;
            }
        }
    }
    return state;
}

function readState(state: State){
    console.log('---------');
    for(let l of state){
        console.log(l);
    }
    console.log('---------'); 
}

export { areEqual, includes, readState, isSolvable, convertArrayInState, convertStateInArray }