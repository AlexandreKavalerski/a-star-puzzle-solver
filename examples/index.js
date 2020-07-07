$(document).ready(function () {
  const initialState = [4, 5, 8, 0, 1, 6, 7, 2, 3];

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
  let state = [[], [], []];
  const stateList = [];
  for (let td of list) {
    stateList.push($(td).text());
  }

  for (let i in stateList) {
    if (i <= 2) {
      state[0].push(Number(stateList[i]));
    } else if (i <= 5) {
      state[1].push(Number(stateList[i]));
    } else {
      state[2].push(Number(stateList[i]));
    }
  }
  return state;
}

function getSolution() {
  const aStar = AStarPuzzleSolver;
  const state = getActualState();
  console.log(state);
  try {
    const solution = aStar.solvePuzzle(state);
    showResults(solution);
    viewSolution(solution);
  } catch (err) {
    alert(
      "O estado inicial é solucionável! Por favor, gere outro estado e tente novamente."
    );
  }
}

function showResults(solution) {
  const markup = `
  <li>Problema resolvido!</li>
  <li>Custo final: ${solution.evaluationFunctionValue.g}</li>
  <li>Nós expandidos: ?</li>
  <li>Início da fronteira: ?</li>
  `;

  $("#results").html(markup);
}

async function viewSolution(solution) {
  // const markup = `
  // `;

  let states = getListOfStates(solution, []);
  awaitsToRender(states);

  // $("#solution").html(markup);
}

function timer(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function awaitsToRender(states) {
  for (let s of states) {
    console.log(s);
    await timer(1200);
    renderTDList(transformStateInArray(s));
  }
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
