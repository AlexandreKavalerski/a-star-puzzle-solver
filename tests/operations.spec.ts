import { expect, Assertion, util } from 'chai';
import { applyOperation, moveUpOperation, moveRightOperation, moveDownOperation, moveLeftOperation, getPositionOfNullItem } from "../src/functions/operations";
import { State, StateItem } from "../src/utils/state";
import { operations } from '../src/utils/operations';
import StateItemPosition from '../src/classes/StateItemPosition';

describe('Smoke Tests', () => {
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

    it('should exist getPositionOfNullItem function', () => {
        expect(getPositionOfNullItem).to.exist;
    });

    it('should return an Array when call applyOperation function', () => {
        const state: State = [[4,5,8], [null,1,6], [7, 2, 3]];
        expect(applyOperation(state, operations.up)).to.be.an('array');
    });
});

describe('Testing returns of getPositionOfNullItem function', () => {  

    it('should return [1,0] when call getPositionOfNullItem function', () => {
        const state: State = [[4,5,8], [null,1,6], [7, 2, 3]];
        const expectedPosition = new StateItemPosition(1,0);
        expect(getPositionOfNullItem(state)).to.eql(expectedPosition);
    });

    it('should return [2,1] when call getPositionOfNullItem function', () => {
        const state: State = [[4,5,8], [3,1,6], [7, null, 2]];
        const expectedPosition = new StateItemPosition(2,1);
        expect(getPositionOfNullItem(state)).to.eql(expectedPosition);
    });

    it('should return [0,0] when call getPositionOfNullItem function', () => {
        const state: State = [[null,5,8], [3,1,6], [7, 2, 4]];
        const expectedPosition = new StateItemPosition(0,0);
        expect(getPositionOfNullItem(state)).to.eql(expectedPosition);
    });
});

describe('Testing returns of applyOperation function', () => {  

    it('should return correct state when call applyOperation function when using movUp operation', () => {
        const actualState: State = [[4,5,8], [null,1,6], [7, 2, 3]];
        const goalState: State = [[null,5,8], [4,1,6], [7, 2, 3]];
        expect(applyOperation(actualState, operations.up)).to.eql(goalState);
    });

});