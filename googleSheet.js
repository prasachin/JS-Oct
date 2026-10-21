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

function generateCells() {
  for (let i = 0; i < rows; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    for (let j = 0; j < cols; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.contentEditable = true;
      rowDiv.appendChild(cell);
    }
    cellsContainer.appendChild(rowDiv);
  }
}
generateCells();
