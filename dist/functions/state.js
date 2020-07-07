"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStateInArray = exports.convertArrayInState = exports.isSolvable = exports.includes = exports.areEqual = void 0;
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
    stateList = stateList.filter(function (val) { return val !== 0; }); // Do not consider 0 when counting inversions
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
            stateList.push(state[l][c]);
        }
    }
    return stateList;
}
exports.convertStateInArray = convertStateInArray;
//TODO: Melhorar a forma de fazer isso
function convertArrayInState(stateList) {
    var state = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (var l in state) {
        for (var c in state[l]) {
            var item = stateList.shift();
            if (item) {
                state[l][c] = item;
            }
        }
    }
    return state;
}
exports.convertArrayInState = convertArrayInState;
//# sourceMappingURL=state.js.map