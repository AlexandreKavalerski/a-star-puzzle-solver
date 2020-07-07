import { expect } from 'chai';
import { applyOperation, moveUpOperation, moveRightOperation, moveDownOperation, moveLeftOperation, getPositionOfBlankItem } from "../src/functions/operations";
import { State, StateItem } from "../src/utils/state";
import { operations } from '../src/utils/operations';
import StateItemPosition from '../src/classes/StateItemPosition';

describe('Operations Smoke Tests', () => {
    it('should exist applyOperation function', () => {
        expect(applyOperation).to.exist;
    });

    it('should exist moveUpOperation function', () => {
        expect(moveUpOperation).to.exist;
    });
    
    it('should exist moveRightOperation function', () => {
        expect(moveRightOperation).to.exist;
    });

    it('should exist moveDownOperation function', () => {
        expect(moveDownOperation).to.exist;
    });

    it('should exist moveLeftOperation function', () => {
        expect(moveLeftOperation).to.exist;
    });

    it('should exist getPositionOfBlankItem function', () => {
        expect(getPositionOfBlankItem).to.exist;
    });

    it('should return an Array when call applyOperation function', () => {
        const state: State = [[4,5,8], [0,1,6], [7, 2, 3]];
        expect(applyOperation(state, operations.up)).to.be.an('array');
    });
});

describe('Testing returns of getPositionOfBlankItem function', () => {  

    it('should return [1,0] when call getPositionOfBlankItem function', () => {
        const state: State = [[4,5,8], [0,1,6], [7, 2, 3]];
        const expectedPosition = new StateItemPosition(1,0);
        expect(getPositionOfBlankItem(state)).to.eql(expectedPosition);
    });

    it('should return [2,1] when call getPositionOfBlankItem function', () => {
        const state: State = [[4,5,8], [3,1,6], [7, 0, 2]];
        const expectedPosition = new StateItemPosition(2,1);
        expect(getPositionOfBlankItem(state)).to.eql(expectedPosition);
    });

    it('should return [0,0] when call getPositionOfBlankItem function', () => {
        const state: State = [[0,5,8], [3,1,6], [7, 2, 4]];
        const expectedPosition = new StateItemPosition(0,0);
        expect(getPositionOfBlankItem(state)).to.eql(expectedPosition);
    });
});

describe('Testing returns of applyOperation function', () => {  

    it('should return correct state when call applyOperation function when using movUp operation', () => {
        const actualState: State = [[4,5,8], [0,1,6], [7, 2, 3]];
        const goalState: State = [[0,5,8], [4,1,6], [7, 2, 3]];
        expect(applyOperation(actualState, operations.up)).to.eql(goalState);
    });
    
    it('should return correct state when call applyOperation function when using movUp operation', () => {
        const actualState: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const goalState: State = [[1,2,3], [4,5,0], [7, 8, 6]];
        expect(applyOperation(actualState, operations.up)).to.eql(goalState);
    });

    it('should return correct state when call applyOperation function when using movRight operation', () => {
        const actualState: State = [[4,5,8], [0,1,6], [7, 2, 3]];
        const goalState: State = [[4,5,8], [1,0,6], [7, 2, 3]];
        expect(applyOperation(actualState, operations.right)).to.eql(goalState);
    });

    it('should return correct state when call applyOperation function when using movRight operation', () => {
        const actualState: State = [[0,5,8], [4,1,6], [7, 2, 3]];
        const goalState: State = [[5,0,8], [4,1,6], [7, 2, 3]];
        expect(applyOperation(actualState, operations.right)).to.eql(goalState);
    });

    it('should return correct state when call applyOperation function when using movDown operation', () => {
        const actualState: State = [[0,5,8], [4,1,6], [7, 2, 3]];
        const goalState: State = [[4,5,8], [0,1,6], [7, 2, 3]];
        expect(applyOperation(actualState, operations.down)).to.eql(goalState);
    });

    it('should return correct state when call applyOperation function when using movDown operation', () => {
        const actualState: State = [[1,2,3], [4,0,6], [7, 5, 8]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 0, 8]];
        expect(applyOperation(actualState, operations.down)).to.eql(goalState);
    });

    it('should return correct state when call applyOperation function when using movLeft operation', () => {
        const actualState: State = [[1,2,3], [4,0,6], [7, 5, 8]];
        const goalState: State = [[1,2,3], [0,4,6], [7, 5, 8]];
        expect(applyOperation(actualState, operations.left)).to.eql(goalState);
    });

    it('should return correct state when call applyOperation function when using movLeft operation', () => {
        const actualState: State = [[5,8,0], [4,1,6], [7, 2, 3]];
        const goalState: State = [[5,0,8], [4,1,6], [7, 2, 3]];
        expect(applyOperation(actualState, operations.left)).to.eql(goalState);
    });
});

describe('Testing returns of applyOperation function when operation cannot be applied', () => {  

    it('should return null when call applyOperation function using movUp operation', () => {
        const actualState: State = [[0,5,8], [4,1,6], [7, 2, 3]];

        expect(applyOperation(actualState, operations.up)).to.eql(null);
    });

    it('should return null when call applyOperation function using movRight operation', () => {
        const actualState: State = [[5,8,6], [4,1,0], [7, 2, 3]];

        expect(applyOperation(actualState, operations.right)).to.eql(null);
    });

    it('should return null when call applyOperation function using movDown operation', () => {
        const actualState: State = [[5,8,6], [4,1,3], [7, 0, 2]];

        expect(applyOperation(actualState, operations.down)).to.eql(null);
    });

    it('should return null when call applyOperation function using movLeft operation', () => {
        const actualState: State = [[5,8,6], [0,4,1], [7, 3, 2]];

        expect(applyOperation(actualState, operations.left)).to.eql(null);
    });
});