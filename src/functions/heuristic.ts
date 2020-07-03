import { State, StateItem } from "../classes/State"


function calcHeuristicValue(actualState: State, goalState: State, gValue: number){
    return gValue + calcHValue(actualState, goalState);
}

function calcHValue(actualState: State, goalState: State){
    let totalDistance = 0;
    for (let line in actualState){
        for (let col in actualState[line]){
            totalDistance += calcDistanceOfItem(actualState[line][col], [Number(line), Number(col)], goalState);
        }
    }
    return totalDistance;
}

function calcDistanceOfItem(item: StateItem, itemPosition: number[], goalState: State): number{
    for (let line in goalState){        
        let col = goalState[line].indexOf(item);
        if(col > -1){
            const distance = Math.abs(itemPosition[0] - Number(line)) + Math.abs(itemPosition[1] - col);
            return distance;
        }
    }
    return 10; //TODO: Rever esse valor (ou tratamento diferente caso o item buscado não exista no estado objetivo)
}

export { calcHeuristicValue, calcDistanceOfItem }