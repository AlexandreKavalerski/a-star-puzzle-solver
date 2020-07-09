import { operations } from './../utils/operations';
import { NodeInfo } from "../classes/Node";
import { State } from '../utils/state';
declare function generateNodeList(node: NodeInfo, goalState: State): NodeInfo[];
declare function generateNode(state: State, op: operations, goalState: State, gValue: number, previousNode?: NodeInfo): NodeInfo;
export { generateNodeList, generateNode };
