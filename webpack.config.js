var join = require("path").join;

module.exports = {
  entry: "./dist/index.js",
  mode: "production",
  output: {
    path: join(__dirname, "lib"),
    filename: "a-star-puzzle-solver.js",
    libraryTarget: "umd",
    library: "AStarPuzzleSolver",
  },
};
