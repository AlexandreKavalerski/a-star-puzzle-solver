import { operations } from './../src/utils/operations';
import { expect } from 'chai';
import { generateNodeList, generateNode } from "../src/functions/node";
import { NodeInfo } from "../src/classes/Node";
import { State } from '../src/utils/state';


describe('Node Smoke Tests', () => { // the tests container
    it('should exist generateNodeList function', () => {
        expect(generateNodeList).to.exist;
    });

    it('should exist generateNode function', () => {
        expect(generateNode).to.exist;
    });

    it('should return an Array when call generateNodeList function', () => {
        const state: State = [[4,5,8], [null,1,6], [7, 2, 3]];
        const node: NodeInfo = new NodeInfo(14, operations.none, state);
        const gValue = 0;
        
        expect(generateNodeList(node, state, gValue)).to.be.an('Array');
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

        const expectedNode = new NodeInfo(14, operations.none, state);
        const gValue = 0;
        expect(generateNode(state, operations.none, finalState, gValue)).to.eql(expectedNode);
    });

    it('should return this NodeInfo obj when call generateNode function', () => {
        const state: State = [[4,5,8], [1,null,6], [7, 2, 3]];
        const finalState: State = [[1,2,3], [4,5,6], [7, 8, null]];

        const expectedNode = new NodeInfo(13, operations.left, state);
        const gValue = 1;
        expect(generateNode(state, operations.left, finalState, gValue)).to.eql(expectedNode);
    });

    it('should return this NodeInfo obj when call generateNode function', () => {
        const state: State = [[4,5,8], [1,2,6], [7, 3, null]];
        const finalState: State = [[1,2,3], [4,5,6], [7, 8, null]];

        const mockedPreviousNode = new NodeInfo(0, operations.none, state);
        const expectedNode = new NodeInfo(13, operations.up, state, mockedPreviousNode);
        const gValue = 3;
        expect(generateNode(state, operations.up, finalState, gValue, mockedPreviousNode)).to.eql(expectedNode);
    });
});


describe('Testing returns of generateNodeList function', () => {  
    
    it('should return this NodeInfo array when call generateNodeList function', () => {
        const state: State = [[4,5,8], [null,1,6], [7, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const rootNode = new NodeInfo(14, operations.none, state);
        const gValue = 0;

        const stateChild1: State = [[null,5,8], [4,1,6], [7, 2, 3]];
        const expectedChild1 = new NodeInfo(15, operations.up, stateChild1, rootNode);
        
        const stateChild2: State = [[4,5,8], [1,null,6], [7, 2, 3]];
        const expectedChild2 = new NodeInfo(13, operations.right, stateChild2, rootNode);
        
        const stateChild3: State = [[4,5,8], [7,1,6], [null, 2, 3]];
        const expectedChild3 = new NodeInfo(15, operations.down, stateChild3, rootNode);

        const childrenList = [expectedChild2, expectedChild1 , expectedChild3];

        expect(generateNodeList(rootNode, goalState, gValue)).to.eql(childrenList);
    });

    it('should return this NodeInfo array when call generateNodeList function', () => {
        const state: State = [[4,5,8], [1,null,6], [7, 2, 3]];
        const goalState: State = [[1,2,3], [4,5,6], [7, 8, null]];
        const rootNode = new NodeInfo(13, operations.right, state);
        const gValue = 1;

        const stateChild1: State = [[4,null,8], [1,5,6], [7, 2, 3]];
        const expectedChild1 = new NodeInfo(14, operations.up, stateChild1, rootNode);
        
        const stateChild2: State = [[4,5,8], [1,6,null], [7, 2, 3]];
        const expectedChild2 = new NodeInfo(14, operations.right, stateChild2, rootNode);
        
        const stateChild3: State = [[4,5,8], [1,2,6], [7, null, 3]];
        const expectedChild3 = new NodeInfo(12, operations.down, stateChild3, rootNode);
        
        const stateChild4: State = [[4,5,8], [null,1,6], [7, 2, 3]];
        const expectedChild4 = new NodeInfo(16, operations.left, stateChild4, rootNode);

        const childrenList = [expectedChild3, expectedChild1, expectedChild2, expectedChild4];

        expect(generateNodeList(rootNode, goalState, gValue)).to.eql(childrenList);
    });
});