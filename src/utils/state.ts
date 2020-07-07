type StateItem = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 0;

type State = [[StateItem, StateItem, StateItem], [StateItem, StateItem, StateItem], [StateItem, StateItem, StateItem]];

type StateAsList = StateItem[];

export { State, StateItem, StateAsList }