# A Star Puzzle Solver

A TypeScript lib that solves Puzzle Game problem using the A* Algorithm

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install A* Puzzle Solver.

```bash
npm install a-star-puzzle-solver-ts
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


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details