import { expect } from 'chai';
import { calcHValue, calcDistanceOfItem } from "../src/functions/heuristic";
import { State, StateItem } from '../src/utils/state';
import StateItemPosition from '../src/classes/StateItemPosition';

describe('Heuristic Smoke Tests', () => { // the tests container
    it('should exist calcHValue function', () => {
        expect(calcHValue).to.exist;
    });

    it('should return a number when call calcHeuristicValue function', () => {
        const initialState: State = [[4,5,8], [0,1,6], [7, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const gValue = 0;
        expect(calcHValue(initialState, goalState)).to.be.a('number');
    });

    it('should exist calcDistanceOfItem function', () => {
        expect(calcDistanceOfItem).to.exist;
    });

    it('should return a number when call calcDistanceOfItem function', () => {
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const item = 2;
        const itemPosition = new StateItemPosition(2, 1);
        expect(calcDistanceOfItem(item, itemPosition, goalState)).to.be.a('number');
    });
});

describe('Testing returns of calcDistanceOfItem', () => {
    it('should return 2 when call calcDistanceOfItem', () => {
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const item: StateItem = 2;
        const itemPosition = new StateItemPosition(2, 1);
        expect(calcDistanceOfItem(item, itemPosition, goalState)).to.equal(2);
    });
    
    it('should return 1 when call calcDistanceOfItem', () => {
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const item: StateItem = 5;
        const itemPosition = new StateItemPosition(0, 1);
        expect(calcDistanceOfItem(item, itemPosition, goalState)).to.equal(1);
    });
    
    it('should return 3 when call calcDistanceOfItem', () => {
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const item: StateItem = 0;
        const itemPosition = new StateItemPosition(1, 0);
        expect(calcDistanceOfItem(item, itemPosition, goalState)).to.equal(3);
    });
})

describe('Testing returns of calcHValue', () => {  
    it('should return 14 when call calcHValue function', () => {
        const initialState: State = [[4,5,8], [0,1,6], [7, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const gValue = 0;
        expect(calcHValue(initialState, goalState)).to.equal(14);
    });


    it('should return 15 when call calcHeuristicValue function', () => {
        const initialState: State = [[0,5,8], [4,1,6], [7, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        expect(calcHValue(initialState, goalState)).to.equal(14);
    });

    it('should return 15 when call calcHeuristicValue function', () => {
        const initialState: State = [[4,5,8], [7,1,6], [0, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        expect(calcHValue(initialState, goalState)).to.equal(14);
    });

    it('should return 13 when call calcHeuristicValue function', () => {
        const initialState: State = [[4,5,8], [1,0,6], [7, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        expect(calcHValue(initialState, goalState)).to.equal(12);
    });

    it('should return 14 when call calcHeuristicValue function', () => {
        const initialState: State = [[4,0,8], [1,5,6], [7, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        expect(calcHValue(initialState, goalState)).to.equal(12);
    });

    it('should return 12 when call calcHeuristicValue function', () => {
        const initialState: State = [[4,5,8], [1,2,6], [7, 0, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        expect(calcHValue(initialState, goalState)).to.equal(10);
    });
})