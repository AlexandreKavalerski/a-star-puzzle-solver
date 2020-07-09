import { State, StateItem } from "../utils/state";
import StateItemPosition from "../classes/StateItemPosition";
declare function calcHValue(actualState: State, goalState: State): number;
declare function calcDistanceOfItem(item: StateItem, itemPosition: StateItemPosition, goalState: State): number;
export { calcHValue, calcDistanceOfItem };
