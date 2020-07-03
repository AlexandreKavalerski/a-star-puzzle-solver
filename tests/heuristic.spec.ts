import { expect } from 'chai';
import { calcHeuristicValue, calcDistanceOfItem } from "../src/functions/heuristic";
import { State, StateItem } from '../src/classes/State';

describe('Smoke Tests', () => { // the tests container
    it('should exist calcHeuristicValue function', () => {
        expect(calcHeuristicValue).to.exist;
    });

    it('should return a number when call calcHeuristicValue function', () => {
        const initialState: State = [[4,5,8], [null,1,6], [7, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const gValue = 0;
        expect(calcHeuristicValue(initialState, goalState, gValue)).to.be.a('number');
    });

    it('should exist calcDistanceOfItem function', () => {
        expect(calcDistanceOfItem).to.exist;
    });

    it('should return a number when call calcDistanceOfItem function', () => {
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const item = 2;
        const itemPosition = [2,1];
        expect(calcDistanceOfItem(item, itemPosition, goalState)).to.be.a('number');
    });
});

describe('Testing returns of calcDistanceOfItem', () => {
    it('should return 2 when call calcDistanceOfItem', () => {
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const item: StateItem = 2;
        const itemPosition = [2,1];
        expect(calcDistanceOfItem(item, itemPosition, goalState)).to.equal(2);
    });
    
    it('should return 1 when call calcDistanceOfItem', () => {
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const item: StateItem = 5;
        const itemPosition = [0,1];
        expect(calcDistanceOfItem(item, itemPosition, goalState)).to.equal(1);
    });
    
    it('should return 3 when call calcDistanceOfItem', () => {
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const item: StateItem = null;
        const itemPosition = [1,0];
        expect(calcDistanceOfItem(item, itemPosition, goalState)).to.equal(3);
    });
})

describe('Testing returns of calcHeuristicValue', () => {  
    it('should return 14 when call calcHeuristicValue function', () => {
        const initialState: State = [[4,5,8], [null,1,6], [7, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const gValue = 0;
        expect(calcHeuristicValue(initialState, goalState, gValue)).to.equal(14);
    });


    it('should return 15 when call calcHeuristicValue function', () => {
        const initialState: State = [[null,5,8], [4,1,6], [7, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const gValue = 1;
        expect(calcHeuristicValue(initialState, goalState, gValue)).to.equal(15);
    });

    it('should return 15 when call calcHeuristicValue function', () => {
        const initialState: State = [[4,5,8], [7,1,6], [null, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const gValue = 1;
        expect(calcHeuristicValue(initialState, goalState, gValue)).to.equal(15);
    });

    it('should return 13 when call calcHeuristicValue function', () => {
        const initialState: State = [[4,5,8], [1,null,6], [7, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const gValue = 1;
        expect(calcHeuristicValue(initialState, goalState, gValue)).to.equal(13);
    });

    it('should return 14 when call calcHeuristicValue function', () => {
        const initialState: State = [[4,null,8], [1,5,6], [7, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const gValue = 2;
        expect(calcHeuristicValue(initialState, goalState, gValue)).to.equal(14);
    });

    it('should return 12 when call calcHeuristicValue function', () => {
        const initialState: State = [[4,5,8], [1,2,6], [7, null, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const gValue = 2;
        expect(calcHeuristicValue(initialState, goalState, gValue)).to.equal(12);
    });
})