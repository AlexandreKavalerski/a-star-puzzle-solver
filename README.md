# A Star Puzzle Solver

[![Build Status](https://travis-ci.org/AlexandreKavalerski/a-star-puzzle-solver.svg?branch=master)](https://travis-ci.org/AlexandreKavalerski/a-star-puzzle-solver)

#### View an example of use [here](https://iac-puzzle-game.netlify.app/)
A TypeScript lib that solves Puzzle Game problem using the A* Algorithm

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install A* Puzzle Solver.

```bash
npm install a-star-puzzle-solver
```

## How to use

### ES6

```js
import AStarPuzzleSolver from 'a-star-puzzle-solver';

const solution = AStarPuzzleSolver.solvePuzzle(state);
```

### CommonJS

```js
const AStar = require('a-star-puzzle-solver').default;

AStar.solvePuzzle(state);
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="a-star-puzzle-solver.umd.js"></script>

<!-- to import minified version -->
<script src="a-star-puzzle-solver.umd.min.js"></script>
```

After that the library will be available to the Global as `AStarPuzzleSolver`. Follow an example:

```js

const aStar = AStarPuzzleSolver;

const solution = aStar.solvePuzzle(state);
```

## Methods
> Follow the methods this library provides:

### solvePuzzle(initialState)
> Solves the 8 Puzzle Game with provided initial state.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`initialState`|*Array of Numbers* | Any state possible|

**Example**

```js
const state = [1, 2, 3, 4, 5, 6, 7, 0, 8];

const solution = AStar.solvePuzzle(state);
/*
Obs:
- Pay atention to the order of elements 
- Internally, this state is interpreted like this:
    [
    [1, 2, 3],
    [4, 5, 6],
    [7, 0, 8]
    ]
*/

```
**Return**
> This method return an object containing: 
> - *pathCost*: Total cost of the algorithm (also known as depth of final state)
> - *expandedNodes*: quantity of nodes visited by the algorithm from the initial state to the final state
> - *iterations*: quantity of interation loops inside the algorithm until arrive final state
> - *solution*: an array of objects (each object has the following properties):
>   - *state*: an array with same format the one provided initially
>   - *operation*: a String that represents the operation applied to achieve the state.
>       - possible values:
>           - 'UP_OPERATION'
>           - 'RIGHT_OPERATION'
>           - 'DOWN_OPERATION'
>           - 'LEFT_OPERATION'
>           - 'NONE'
> - *finalNode*: an object wich you can use to access all solution
>    - properties:
>       - *operation*: a String that represents the operation applied to achieve the state (values are same indicated above).
>       -  *evaluationFunctionValue*: an object that represents value of 
>           - properties:
>               - *g*: depth of node
>               - *h*: heuristic value
>               - *f*: sum of 'g' and 'h'
>       - *state*: state of node, but in a different format of states provided by solution's array (see `convertStateInArray` method below)
>       - *previousNode*: another object with same properties (represents parent node of this one)

**Obs:**
- For more examples of how to use, see ['./examples'](./examples/) folder
- The goalState considered by the algorithm is:

![](./images/goal-state.jpg)

### convertStateInArray(state)
> Receives a multidimensional array (3x3) and return an unidimensional (with 9 positions).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`state`|*Multidimensional array of Numbers* | Any state possible|

**Example**

```js
const state = [[1, 2, 3], [4, 5, 6], [7, 0, 8]];

const arr = AStar.convertStateInArray(state);

```
**Return**
> This method return an unidimensional array similar to this: 
> ```js
> //Considering argument of example above
> [1, 2, 3, 4, 5, 6, 7, 0, 8]

### convertArrayInState(arr)
> Does the exact opposite of `convertStateInArray`. Receives an unidimensional array of 9 positions and return  multidimensional one (3x3).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`arr`|*Unidimensional array of Numbers* | Any state possible|

**Example**

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 0, 8];

const state = AStar.convertArrayInState(arr);

```
**Return**
> This method return a multidimensional array similar to this: 
> ```js
> //Considering argument of example above
> [[1, 2, 3], [4, 5, 6], [7, 0, 8]]


### isSolvable(state)
> Receives a state and returns whether it is solvable or not.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`state`|*Multidimensional array of Numbers* | Any state possible|

**Example**

```js
const state = [[1, 2, 3], [4, 5, 6], [7, 0, 8]];

const isSolvable: boolean = AStar.isSolvable(state);

```
**Return**
> This method return a boolean value indicating whether state is solvable or not: 
> ```js
> true | false


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
