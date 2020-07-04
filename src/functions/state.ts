import { State } from "../utils/state";


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

function readState(state: State){
    console.log('---------');
    for(let l of state){
        console.log(l);
    }
    console.log('---------'); 
}

export { areEqual, includes, readState }