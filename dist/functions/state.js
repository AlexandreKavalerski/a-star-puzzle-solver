"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSolvable = exports.readState = exports.includes = exports.areEqual = void 0;
// Using this function because literal comparison between 2 types (state1 == state2) always return false
// TODO: melhorar formato de verificação
function areEqual(state1, state2) {
    var equal = true;
    for (var l in state1) {
        for (var c in state1) {
            if (!(state1[l][c] == state2[l][c])) {
                return false;
            }
        }
    }
    return true;
}
exports.areEqual = areEqual;
// TODO: melhorar formato de verificação
function includes(state, list) {
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var s = list_1[_i];
        if (areEqual(s, state)) {
            return true;
        }
    }
    return false;
}
exports.includes = includes;
function isSolvable(state) {
    return quantityOfInversions(state) % 2 === 0;
}
exports.isSolvable = isSolvable;
function quantityOfInversions(state) {
    var stateList = convertStateInArray(state);
    var inversions = 0;
    for (var i in stateList) {
        for (var j = Number(i) + 1; j < stateList.length; j++) {
            if (stateList[i] > stateList[j]) {
                inversions++;
            }
        }
    }
    return inversions;
}
//TODO: Melhorar a forma de fazer isso
function convertStateInArray(state) {
    var stateList = [];
    for (var l in state) {
        for (var c in state[l]) {
            if (state[l][c] !== 0) { // Do not consider 0 when counting inversions
                stateList.push(state[l][c]);
            }
        }
    }
    return stateList;
}
function readState(state) {
    console.log('---------');
    for (var _i = 0, state_1 = state; _i < state_1.length; _i++) {
        var l = state_1[_i];
        console.log(l);
    }
    console.log('---------');
}
exports.readState = readState;
//# sourceMappingURL=state.js.map