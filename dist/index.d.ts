import { State, StateAsList } from "./utils/state";
import { isSolvable, convertArrayInState, convertStateInArray } from './functions/state';
declare function index(state: StateAsList, finalState?: State): import("./classes/Result").default;
export { index as solvePuzzle, convertArrayInState, convertStateInArray, isSolvable };
