import { State } from "../utils/state";
import { NodeInfo } from "../classes/Node";
import Result from "../classes/Result";
declare function runAStarLoop(goalState: State, frontier: NodeInfo[], expandedStates: State[]): Result | undefined;
export { runAStarLoop as run };
