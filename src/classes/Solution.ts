import { operations } from './../utils/operations';
import { StateAsList } from "../utils/state";

export default class SolutionItem {
    state: StateAsList;
    operation: operations;

    constructor(s: StateAsList, op: operations){
        this.state = s;
        this.operation = op;
    }
}