import toastr from "toastr";
import "toastr/build/toastr.min.css";

const loadHome = () => {
  const content = document.getElementById("content");

  content.innerHTML = `
    <aside>
      <ul>
        <li><button type="button" id="start">Start</button></li>
        <li><button type="button" id="travel">Travel</button></li>
        <li><button type="button" id="clear">Clear</button></li>
      </ul>
    </aside>
    <main >
        <div id="grid_container"></div>
    </main>
  `;

  const container = document.querySelector("#grid_container");
  const start = document.querySelector("#start");
  const travel = document.querySelector("#travel");
  const clear = document.querySelector("#clear");

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
    toastr.info(
      "Click on any one of the squares to place the knight then press again to select the end point then press travel button to see the travel path",
    );
  });

  const createGrid = () => {
    container.innerHTML = "";
    const alpha = ['A','B','C','D','E','F','G','H']
    const cellSize = 100 / 8;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const cell = document.createElement("button");
        if ((row + col) % 2 == 0) {
          cell.classList.add("black", "grid-cell");
        } else {
          cell.classList.add("white", "grid-cell");
        }
        container.appendChild(cell);
      }
    }
  };

  clear.addEventListener("click", () => {
    document.querySelectorAll(".grid-cell").forEach((cell) => {
      cell.classList.remove("selected");
    });
  });

  createGrid();
};

export default loadHome;
