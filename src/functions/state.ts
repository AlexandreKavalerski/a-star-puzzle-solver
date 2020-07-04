
// Using this function because literal comparison between 2 types (state1 == state2) always return false
// TODO: melhorar formato de verificação
function areEqual(state1: (number | null)[][], state2: (number | null)[][]){ 
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
function includes(state: (number | null)[][], list: (number | null)[][][]){
    for (let s of list){
        if(areEqual(s, state)){
            return true;
        }
    }
    return false;
}

function readState(state: (number | null)[][]){
    console.log('---------');
    for(let l of state){
        console.log(l);
    }
    console.log('---------'); 
}

export { areEqual, includes, readState }