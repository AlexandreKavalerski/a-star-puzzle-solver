import { NodeInfo } from "./Node";
import SolutionItem from "./Solution";

export default class Result {
    pathCost: number;
    iterations: number;
    expandedNodes: number;
    finalNode: NodeInfo;
    solution?: SolutionItem[];

    constructor(pathCost: number, iterations: number, expandedNodes: number, finalNode: NodeInfo, solution?: SolutionItem[]){
        this.pathCost = pathCost;
        this.iterations = iterations;
        this.expandedNodes = expandedNodes;
        this.finalNode = finalNode;
        this.solution = solution;
    }
}