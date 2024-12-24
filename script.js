const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  
  for (let c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = c + 1;
    cell.classList.add("grid-item"); 
    container.appendChild(cell);
  }

  
  const newCells = container.querySelectorAll(".grid-item"); 
  newCells.forEach((cell) => {
    
    cell.addEventListener("mouseover", () => {
      cell.style.color = "red"; 
    });
    
    
    cell.addEventListener("mouseout", () => {
      cell.style.color = ""; 
    });
  });
}

makeRows(16, 16);
