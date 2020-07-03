import { State, StateItem } from "../utils/state"
import StateItemPosition from "../classes/StateItemPosition";


function calcHeuristicValue(actualState: State, goalState: State, gValue: number){
    return gValue + calcHValue(actualState, goalState);
}

function calcHValue(actualState: State, goalState: State){
    let totalDistance = 0;
    for (let line in actualState){
        for (let col in actualState[line]){
            const itemPosition = new StateItemPosition(Number(line), Number(col));
            totalDistance += calcDistanceOfItem(actualState[line][col], itemPosition, goalState);
        }
    }
    return totalDistance;
}

function calcDistanceOfItem(item: StateItem, itemPosition: StateItemPosition, goalState: State): number{
    for (let line in goalState){        
        let col = goalState[line].indexOf(item);
        if(col > -1){
            const distance = Math.abs(itemPosition.line - Number(line)) + Math.abs(itemPosition.col - col);
            return distance;
        }
    }
    return 10; //TODO: Rever esse valor (ou tratamento diferente caso o item buscado não exista no estado objetivo)
}

export { calcHeuristicValue, calcDistanceOfItem }