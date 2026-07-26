import toastr from "toastr";
import "toastr/build/toastr.min.css";

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

  start.addEventListener("click", () => {
    toastr.info("Click on any one of the squares to place the knight");
  });

  let selectedCells = [];

  const handleCellClick = (cell) => {
    if (selectedCells.length >= 1) {
      selectedCells.forEach((c) => c.classList.remove("select"));
      selectedCells = [];
    }
    cell.classList.add("select");
    selectedCells.push(cell);
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
    });
    selectedCells = [];
  });

  createGrid();
};

export default loadHome;
