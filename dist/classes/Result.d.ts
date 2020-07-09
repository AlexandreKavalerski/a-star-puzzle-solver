import { NodeInfo } from "./Node";
import SolutionItem from "./Solution";
export default class Result {
    pathCost: number;
    iterations: number;
    expandedNodes: number;
    finalNode: NodeInfo;
    solution?: SolutionItem[];
    constructor(pathCost: number, iterations: number, expandedNodes: number, finalNode: NodeInfo, solution?: SolutionItem[]);
}
