import { State, StateAsList } from "../utils/state";
declare function areEqual(state1: State, state2: State): boolean;
declare function includes(state: State, list: State[]): boolean;
declare function isSolvable(state: State): boolean;
declare function convertStateInArray(state: State): StateAsList;
declare function convertArrayInState(stateList: StateAsList): State;
export { areEqual, includes, isSolvable, convertArrayInState, convertStateInArray };
