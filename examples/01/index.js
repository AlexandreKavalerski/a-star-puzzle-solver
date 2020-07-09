$(document).ready(function () {
  const initialState = [1, 8, 2, 0, 4, 3, 7, 6, 5];

  renderTDList(initialState);
  $("#btnRandomize").on("click", function () {
    randomState();
  });

  $("#btnSolution").on("click", function () {
    getSolution();
  });
});

function renderTDList(stateList) {
  console.log("rendering...");
  console.log(stateList);

  const list = $("td.td-puzzle");
  let pos = 0;
  for (let td of list) {
    $(td).html(stateList.shift());
    pos++;
  }
}

function getActualState() {
  const list = $("td.td-puzzle");
  const stateList = [];
  for (let td of list) {
    stateList.push(Number($(td).text()));
  }

  return stateList;
}

function getSolution() {
  const state = getActualState();
  try {
    const result = AStarPuzzleSolver.solvePuzzle(state);

    showResults(result);
    viewSolution(result);
  } catch (err) {
    alert(err);
  }
}

function showResults(result) {
  const markup = `
  <li>Problema resolvido!</li>
  <li>Custo do caminho: ${result.pathCost}</li>
  <li>Nós expandidos: ${result.expandedNodes}</li>
  <li>Iterações: ${result.iterations}</li>
  `;

  $("#results").html(markup);
}

async function viewSolution(result) {
  // const markup = `
  // `;

  const states = result.solution.map((s) => s.state);
  const operations = result.solution.map((s) => s.operation);
  awaitsToRender(states, operations);

  // $("#solution").html(markup);
}

function timer(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function awaitsToRender(states, operations) {
  for (let i in states) {
    await timer(1200);
    renderTDList(states[i]);
    showOperation(operations[i]);
  }
}

function showOperation(op) {
  $(".operation-item").attr("hidden", "");
  $(`#MOVE_${op}`).removeAttr("hidden");
}

function transformStateInArray(state) {
  let array = [];
  for (let l in state) {
    for (let c in state[l]) {
      array.push(state[l][c]);
    }
  }
  return array;
}

function getListOfStates(node, list) {
  if (node.previousNode) {
    list.unshift(node.state);
    return getListOfStates(node.previousNode, list);
  } else {
    return list;
  }
}

function randomState() {
  state = [1, 2, 3, 4, 5, 6, 7, 8, 0];
  state.sort((a, b) => Math.random() - Math.random());
  renderTDList(state);
}
