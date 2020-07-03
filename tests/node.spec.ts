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