/*
Google Sheet Clone
Features Phase 1:
1. There will be editable cells in the sheet.
2. There will be a formula bar where user can type the formula and result will be reflected in the desired cell cell.
3. There will be a toolbar with options like Bold, Italic, Underline.
4. There will be dependency tracking as well.
5. There will be an address bar where user can see the address of the selected cell.

Features Phase 2:
1. There will be a tool in the toolbar section using wihich we can open an AI assistant.
2. AI assistant will be draggable and input will be resizable.
3. User can selects multiple cells about which he wants to ask queries.
4. User can ask any queries related to the sheet data in plain english and AI will give result in desired 
place.

Data structures and Models:

We will use 2-D array.
for each cell we are going to have an Object with following scheama:

{
    value: "value of the cell",
    formula: "formula of the cell",
    children: ["list of children cells"],
    parents: ["list of parent cells"]
}

*/

let cols = 26;
let rows = 1000;
let sheetDB = [];

function createSheetDB() {
  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      row.push({
        value: "",
        formula: "",
        children: [],
        parents: [],
      });
    }
    sheetDB.push(row);
  }
}

createSheetDB();

let topRow = document.querySelector(".top-row");
let leftCol = document.querySelector(".left-col");
let cellsContainer = document.querySelector(".cells");

function generateHeaders() {
  for (let i = 0; i < cols; i++) {
    let cell = document.createElement("div");
    cell.textContent = String.fromCharCode(65 + i);
    cell.classList.add("cell");
    topRow.appendChild(cell);
  }

  for (let i = 0; i < rows; i++) {
    let cell = document.createElement("div");
    cell.textContent = i + 1;
    leftCol.appendChild(cell);
    cell.classList.add("cell");
  }
}

generateHeaders();
let selectedCell = null;
function generateCells() {
  for (let i = 0; i < rows; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.contentEditable = true;
      cell.addEventListener("click", (e) => {
        selectedCell = e.target;
        let address = String.fromCharCode(65 + j) + (i + 1);
        let addressBar = document.querySelector("#address");
        cell.setAttribute("rid", i);
        cell.setAttribute("cid", j);
        addressBar.value = address;
      });
      rowDiv.appendChild(cell);
    }
    cellsContainer.appendChild(rowDiv);
  }
}
generateCells();

let boldBtn = document.querySelector("#bold");
let italicBtn = document.querySelector("#italic");
let underlineBtn = document.querySelector("#underline");
let clearBtn = document.querySelector("#clear");
let formulaInput = document.querySelector("#formula-input");

boldBtn.addEventListener("click", () => {
  if (!selectedCell) return;
  selectedCell.style.fontWeight =
    selectedCell.style.fontWeight === "bold" ? "normal" : "bold";
});

italicBtn.addEventListener("click", () => {
  if (!selectedCell) return;
  selectedCell.style.fontStyle =
    selectedCell.style.fontStyle === "italic" ? "normal" : "italic";
});

underlineBtn.addEventListener("click", () => {
  if (!selectedCell) return;
  selectedCell.style.textDecoration =
    selectedCell.style.textDecoration === "underline" ? "none" : "underline";
});

clearBtn.addEventListener("click", () => {
  formulaInput.value = "";
});
// A847385
function getRIDCID(address) {
  let rid = Number(address.slice(1)) - 1;
  let cid = address.charCodeAt(0) - 65;
  return { rid, cid };
}

// A1 --> 5 and B1 --> 10
// A1 + B1
// ["A1", "+", "B1"]
// ["5", "+", "10"]
// "5 + 10"
function evaluateFormula(formula) {
  if (!formula) return;
  let tokens = formula.split(" ");
  for (let i = 0; i < tokens.length; i++) {
    if (/^[A-Z][0-9]+$/.test(tokens[i])) {
      let { rid, cid } = getRIDCID(tokens[i]);
      let value = sheetDB[rid][cid].value;
      tokens[i] = value;
    }
  }
  let expression = tokens.join(" ");
  return eval(expression);
  console.log(tokens);
}

formulaInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let formula = e.target.value;
    let address = document.querySelector("#address").value;
    if (!address) return;
    let value = evaluateFormula(formula);
    UpdateCell(value, formula, address);
  }
});

function UpdateCell(value, formula, address) {
  let { rid, cid } = getRIDCID(address);
  sheetDB[rid][cid].value = value;
  sheetDB[rid][cid].formula = formula;
  let cell = document.querySelector(`.cell[rid="${rid}"][cid="${cid}"]`);
  cell.textContent = value;
}

cellsContainer.addEventListener(
  "blur",
  (e) => {
    let cell = e.target;
    let rid = Number(cell.getAttribute("rid"));
    let cid = Number(cell.getAttribute("cid"));
    let value = cell.textContent;
    sheetDB[rid][cid].value = value;
  },
  true,
);
