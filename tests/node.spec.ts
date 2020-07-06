import { operations } from './../src/utils/operations';
import { expect } from 'chai';
import { generateNodeList, generateNode } from "../src/functions/node";
import { NodeInfo } from "../src/classes/Node";
import { State } from '../src/utils/state';
import HeuristicValue from '../src/classes/HeuristicValue';


describe('Node Smoke Tests', () => { // the tests container
    it('should exist generateNodeList function', () => {
        expect(generateNodeList).to.exist;
    });

    it('should exist generateNode function', () => {
        expect(generateNode).to.exist;
    });

    it('should return an Array when call generateNodeList function', () => {
        const state: State = [[4,5,8], [null,1,6], [7, 2, 3]];
        const heuristicValue = new HeuristicValue(0, 14, 14);
        const node: NodeInfo = new NodeInfo(heuristicValue, operations.none, state);
        
        expect(generateNodeList(node, state)).to.be.an('Array');
    });
    
    it('should return a NodeInfo object when call generateNode function', () => {
        const state: State = [[4,5,8], [null,1,6], [7, 2, 3]];
        const gValue = 0;
        expect(generateNode(state, operations.none,state, gValue)).to.be.instanceOf(NodeInfo);
    });
});

describe('Testing returns of generateNode function', () => {  
    
    it('should return this NodeInfo obj when call generateNode function', () => {
        const state: State = [[4,5,8], [null,1,6], [7, 2, 3]];
        const finalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const heuristicValue = new HeuristicValue(0, 14, 14);

        const expectedNode = new NodeInfo(heuristicValue, operations.none, state);
        const gValue = 0;
        expect(generateNode(state, operations.none, finalState, gValue)).to.eql(expectedNode);
    });

    it('should return this NodeInfo obj when call generateNode function', () => {
        const state: State = [[4,5,8], [1,null,6], [7, 2, 3]];
        const finalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const heuristicValue = new HeuristicValue(1, 12, 13);

        const expectedNode = new NodeInfo(heuristicValue, operations.left, state);
        const gValue = 1;
        expect(generateNode(state, operations.left, finalState, gValue)).to.eql(expectedNode);
    });

    it('should return this NodeInfo obj when call generateNode function', () => {
        const state: State = [[4,5,8], [1,2,6], [7, 3, null]];
        const finalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const heuristicValuePrevious = new HeuristicValue(0, 0, 0);
        
        const mockedPreviousNode = new NodeInfo(heuristicValuePrevious, operations.none, state);
        const heuristicValueExpected = new HeuristicValue(3, 10, 13);
        const expectedNode = new NodeInfo(heuristicValueExpected, operations.up, state, mockedPreviousNode);
        const gValue = 3;
        expect(generateNode(state, operations.up, finalState, gValue, mockedPreviousNode)).to.eql(expectedNode);
    });
});


describe('Testing returns of generateNodeList function', () => {  
    it('should return this NodeInfo array when call generateNodeList function', () => {
        const state: State = [[4,5,8], [null,1,6], [7, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const heuristicValueRoot = new HeuristicValue(0, 14, 14);
        const rootNode = new NodeInfo(heuristicValueRoot, operations.none, state);
        
        const stateChild1: State = [[null,5,8], [4,1,6], [7, 2, 3]];
        const heuristicValue1 = new HeuristicValue(1, 14, 15);
        const expectedChild1 = new NodeInfo(heuristicValue1, operations.up, stateChild1, rootNode);

        const stateChild2: State = [[4,5,8], [1,null,6], [7, 2, 3]];
        const heuristicValue2 = new HeuristicValue(1, 12, 13);
        const expectedChild2 = new NodeInfo(heuristicValue2, operations.right, stateChild2, rootNode);

        const stateChild3: State = [[4,5,8], [7,1,6], [null, 2, 3]];
        const heuristicValue3 = new HeuristicValue(1, 14, 15);
        const expectedChild3 = new NodeInfo(heuristicValue3, operations.down, stateChild3, rootNode);

        const childrenList = [expectedChild1, expectedChild2 , expectedChild3];
        
        expect(generateNodeList(rootNode, goalState)).to.eql(childrenList);
    });
            
    it('should return this NodeInfo array when call generateNodeList function', () => {
        const state: State = [[4,5,8], [1,null,6], [7, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const heuristicValueRoot = new HeuristicValue(1, 12, 13);
        const rootNode = new NodeInfo(heuristicValueRoot, operations.right, state);
        
        const stateChild1: State = [[4,null,8], [1,5,6], [7, 2, 3]];
        const heuristicValue1 = new HeuristicValue(2, 12, 14);
        const expectedChild1 = new NodeInfo(heuristicValue1, operations.up, stateChild1, rootNode);
        
        const stateChild2: State = [[4,5,8], [1,6,null], [7, 2, 3]];
        const heuristicValue2 = new HeuristicValue(2, 12, 14);
        const expectedChild2 = new NodeInfo(heuristicValue2, operations.right, stateChild2, rootNode);
        
        const stateChild3: State = [[4,5,8], [1,2,6], [7, null, 3]];
        const heuristicValue3 = new HeuristicValue(2, 10, 12);
        const expectedChild3 = new NodeInfo(heuristicValue3, operations.down, stateChild3, rootNode);
        
        const stateChild4: State = [[4,5,8], [null,1,6], [7, 2, 3]];
        const heuristicValue4 = new HeuristicValue(2, 14, 16);
        const expectedChild4 = new NodeInfo(heuristicValue4, operations.left, stateChild4, rootNode);

        const childrenList = [expectedChild1, expectedChild2, expectedChild3, expectedChild4];
        
        expect(generateNodeList(rootNode, goalState)).to.eql(childrenList);
    });
});