import toastr from "toastr";
import "toastr/build/toastr.min.css";
import knightMoves from "./Knight_travails.js";

const loadHome = () => {
  const content = document.getElementById("content");
  content.innerHTML = `
    <aside>
      <ul>
        <li><button type="button" id="start">Start</button></li>
        <li><button type="button" id="destination">Select Destination</button></li>
        <li><button type="button" id="travel">Travel</button></li>
        <li><button type="button" id="clear">Clear</button></li>
      </ul>
    </aside>
    <main>
        <div id="grid_container"></div>
    </main>
  `;

  const container = document.querySelector("#grid_container");
  const start = document.querySelector("#start");
  const travel = document.querySelector("#travel");
  const clear = document.querySelector("#clear");
  const destination = document.querySelector("#destination");

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: false,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "1000",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };
  let count = 0;
  let startingCell = [];
  let destinationCell = [];
  start.addEventListener("click", () => {
    toastr.info("Click on any one of the squares to place the knight");
    count = 1;
  });
  destination.addEventListener("click", () => {
    toastr.info("Click on any one of the squares to select the destination");
    count = 2;
  });

  const handleCellClick = (cell) => {
    if (count == 0) {
      toastr.error('Click "Start" to start the game');
    } else if (count == 1) {
      if (startingCell.length >= 2) {
        const strt = document.querySelector(
          `[data-row="${startingCell[0]}"][data-col="${startingCell[1]}"]`,
        );
        strt.classList.remove("select");
        startingCell = [];
      }
      cell.classList.add("select");
      startingCell.push(parseInt(cell.dataset.row), parseInt(cell.dataset.col));
    } else if (count == 2) {
      if (
        startingCell[0] == parseInt(cell.dataset.row) &&
        startingCell[1] == parseInt(cell.dataset.col)
      ) {
        toastr.error("Choose unoccupied cell");
      } else {
        if (destinationCell.length >= 2) {
          const end = document.querySelector(
            `[data-row="${destinationCell[0]}"][data-col="${destinationCell[1]}"]`,
          );
          end.classList.remove("destination");
          destinationCell = [];
        }
        cell.classList.add("destination");
        destinationCell.push(
          parseInt(cell.dataset.row),
          parseInt(cell.dataset.col),
        );
      }
    }
  };

  const createGrid = () => {
    container.innerHTML = "";
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const cell = document.createElement("button");
        cell.classList.add(
          "grid-cell",
          (row + col) % 2 === 0 ? "black" : "white",
        );
        cell.dataset.row = row;
        cell.dataset.col = col;

        cell.addEventListener("click", () => handleCellClick(cell));

        container.appendChild(cell);
      }
    }
  };

  clear.addEventListener("click", () => {
    document.querySelectorAll(".grid-cell").forEach((cell) => {
      cell.classList.remove("select");
      cell.classList.remove("destination");
    });
    startingCell = [];
  });
  travel.addEventListener("click", () => {

    if (startingCell.length > 0 && destinationCell.length > 0) {
      const moves = knightMoves(startingCell, destinationCell);

      if (!moves) {
        toastr.error("Could not find a path — try different squares");
        return;
      }
      moves.forEach((square, i) => {
        setTimeout(() => {
          const [row, col] = square;
          if (i > 0) {
            const [prevRow, prevCol] = moves[i - 1];
            const prevCell = document.querySelector(
              `[data-row="${prevRow}"][data-col="${prevCol}"]`,
            );
            if (prevCell) prevCell.classList.remove("select");
          }
          const cell = document.querySelector(
            `[data-row="${row}"][data-col="${col}"]`,
          );
          if (cell) cell.classList.add("select");
        }, i * 500);
      });

      document.querySelector(".destination").style.removeProperty('background-color')
      document.querySelector(".destination").style.color = "green";
    }
  });

  createGrid();
};

export default loadHome;
