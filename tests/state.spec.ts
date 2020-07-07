import { expect } from 'chai';
import { areEqual, includes, isSolvable, convertArrayInState, convertStateInArray } from '../src/functions/state';
import { State, StateAsList } from '../src/utils/state';

describe('State Smoke Tests', () => {
    it('Should exist areEqual function', () => {
        expect(areEqual).to.exist;
    });
    
    it('Should return boolean when call areEqual function', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const state2: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        expect(areEqual(state1, state2)).to.be.a('Boolean');
    });
    
    it('Should exist includes function', () => {
        expect(includes).to.exist;
    });
    
    it('Should return boolean when call includes function', () => {
        const state: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const list: State[] = [state];
        expect(includes(state, list)).to.be.a('Boolean');
    });

    it('Should exist isSolvable function', () => {
        expect(isSolvable).to.exist;
    });

    it('Should return boolean when call isSolvable function', () => {
        const state: State = [[4,5,8], [0,1,6], [7, 2, 3]];
        expect(isSolvable(state)).to.be.a('Boolean');
    });

    it('Should exist convertArrayInState function', () => {
        expect(convertArrayInState).to.exist;
    });

    it('Should return Array(State) when call convertArrayInState function', () => {
        const stateList: StateAsList = [0,0,0,0,0,0,0,0,0];
        expect(convertArrayInState(stateList)).to.be.an('Array');
    });

    it('Should exist convertStateInArray function', () => {
        expect(convertStateInArray).to.exist;
    });

    it('Should return Array when call convertStateInArray function', () => {
        const state: State = [[0,0,0],[0,0,0],[0,0,0]];
        expect(convertStateInArray(state)).to.be.an('Array');
    });
    
});

describe('Testing returns of areEqual function', () => {
    it('Should return true', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const state2: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        expect(areEqual(state1, state2)).to.eql(true);
    });

    it('Should return false', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const state2: State = [[1,2,3], [4,5,6], [7, 0, 8]];
        expect(areEqual(state1, state2)).to.eql(false);
    });

    it('Should return true', () => {
        const state1: State = [[4,5,3], [2,1,6], [7, 0, 8]];
        const state2: State = [[4,5,3], [2,1,6], [7, 0, 8]];
        expect(areEqual(state1, state2)).to.eql(true);
    });

    it('Should return false', () => {
        const state1: State = [[4,5,3], [0,5,6], [2, 7, 8]];
        const state2: State = [[4,1,3], [2,1,6], [7, 7, 8]];
        expect(areEqual(state1, state2)).to.eql(false);
    });
});


describe('Testing returns of includes function', () => {
    it('Should return true', () => {
        const state: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const list: State[] = [state];
        expect(includes(state, list)).to.eql(true);
    });

    it('Should return false', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const state2: State = [[1,2,3], [4,5,6], [7, 0, 8]];
        const list: State[] = [state1];
        expect(includes(state2, list)).to.eql(false);
    });

    it('Should return true', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const state2: State = [[1,2,3], [4,5,6], [7, 0, 8]];
        const list: State[] = [];
        list.push(state1);
        list.push(state2);
        expect(includes(state2, list)).to.eql(true);
    });

    it('Should return false', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const state2: State = [[1,2,3], [4,5,6], [7, 0, 8]];
        const state3: State = [[1,2,5], [3,4,6], [7, 0, 8]];
        const list: State[] = [];
        list.push(state1);
        list.push(state2);
        expect(includes(state3, list)).to.eql(false);
    });

    it('Should return false', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const list: State[] = [];
        expect(includes(state1, list)).to.eql(false);
    });

    it('Should return true', () => {
        const state1: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const state1Copy: State = [[1,2,3], [4,5,6], [7, 8, 0]];
        const list: State[] = [];
        list.push(state1);
        expect(includes(state1Copy, list)).to.eql(true);
    });
});

describe('Testing returns of isSolvable function', () => {
    it('should return false using this state', () => {
        const state: State = [[4,5,8], [0,1,6], [7, 2, 3]];
        expect(isSolvable(state)).to.eql(false);
    });

    it('should return true using this state', () => {
        const state: State = [[1,8,2], [0,4,3], [7, 6, 5]];
        expect(isSolvable(state)).to.eql(true);
    });

    it('should return false using this state', () => {
        const state: State = [[8,1,2], [0,4,3], [7, 6, 5]];
        expect(isSolvable(state)).to.eql(false);
    });

    it('should return false using this state', () => {
        const state: State = [[1,2,3], [4,5,6], [8, 7, 0]];
        expect(isSolvable(state)).to.eql(false);
    });

    it('should return true using this state', () => {
        const state: State = [[8,4,2], [0,1,3], [7, 6, 5]];
        expect(isSolvable(state)).to.eql(true);
    });

    it('should return true using this state', () => {
        const state: State = [[8,7,0], [4,1,3], [2, 6, 5]];
        expect(isSolvable(state)).to.eql(true);
    });

    it('should return false using this state', () => {
        const state: State = [[8,4,0], [7,1,3], [2, 6, 5]];
        expect(isSolvable(state)).to.eql(false);
    });
    
});

describe('Testing returns of convertArrayInState function', () => {
    it('Should return this state using this array', () => {
        const stateList: StateAsList = [1, 2, 3, 4, 5, 6, 7, 8, 0];
        const expectedState: State = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
        expect(convertArrayInState(stateList)).to.be.eql(expectedState);
    });

    it('Should return this state using this array', () => {
        const stateList: StateAsList = [4, 5, 8, 1, 2, 6, 7, 3, 0];
        const expectedState: State = [[4, 5, 8], [1, 2, 6], [7, 3, 0]];
        expect(convertArrayInState(stateList)).to.be.eql(expectedState);
    });
});

describe('Testing returns of convertStateInArray function', () => {
    it('Should return this array using this state', () => {
        const state: State = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];
        const expectedStateList: StateAsList = [1, 2, 3, 4, 5, 6, 7, 8, 0];
        expect(convertStateInArray(state)).to.be.eql(expectedStateList);
    });
    
    it('Should return this array using this state', () => {
        const state: State = [[4, 5, 8], [6, 7, 3], [1, 2, 0]];
        const expectedStateList: StateAsList = [4, 5, 8, 6, 7, 3, 1, 2, 0];
        expect(convertStateInArray(state)).to.be.eql(expectedStateList);
    });

    it('Should return this array using this state', () => {
        const state: State = [[4, 2, 8], [6, 1, 3], [5, 7, 0]];
        const expectedStateList: StateAsList = [4, 2, 8, 6, 1, 3, 5, 7, 0];
        expect(convertStateInArray(state)).to.be.eql(expectedStateList);
    });
});