
let row = 0;
let col = 0;
let clickCount = 0; // variable for reload the page

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

// The function that make efficient the button then run the other functions
function popUp() {

  clickCount++;

  if(clickCount === 1){
    let row = prompt("Please enter the row");
    let col = prompt("Please enter the col");
    row = parseInt(row);
    col = parseInt(col);
  
    checkInteger(row, col);
    makeRows(row, col);
  }

  else if (clickCount === 2) {
    location.reload(); 
  }
  
}

// Validation for integer
function checkInteger(row, col) {
  try {
    
    if (isNaN(row) || isNaN(col)) {
      throw new Error("Both inputs must be numbers.");
    }

    if (row < 1 || row > 100 || col < 1 || col > 100) {
      throw new Error("Inputs must be within the range of 1 to 100.");
    }

    if (row !== col) {
      throw new Error("Row and column must be the same.");
    }

    console.log("Row and column values are valid:", row, col);
  } catch (error) {
    document.getElementById("errorMessage").innerText = "Error: " + error.message; //It shows the error on the page
  }
}




