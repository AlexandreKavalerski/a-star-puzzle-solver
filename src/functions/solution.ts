import { NodeInfo } from "../classes/Node";
import { convertStateInArray } from "./state";
import SolutionItem from "../classes/Solution";


function getSolutionFromNode(node: NodeInfo, list: SolutionItem[]): SolutionItem[]{
    if(node.previousNode){
        list.unshift(new SolutionItem(convertStateInArray(node.state), node.operation));
        return getSolutionFromNode(node.previousNode, list);
    }
    return list;
}

export { getSolutionFromNode }