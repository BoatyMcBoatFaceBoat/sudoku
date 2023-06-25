const d = document;

function createGrid(){
  const wrapper = d.getElementById("puzzle-wrapper");

  for (let i=0; i<9; i++){
    const outerGrid = d.createElement("div");
    outerGrid.className = "outer-grid";

    wrapper.append(outerGrid);
      

    for (let i=0; i<9; i++){
      const innerGrid = d.createElement("div");
      innerGrid.className = "inner-grid";
  
      outerGrid.append(innerGrid);
      innerGrid.innerHTML = " cell" + ( i + 1 ); 
    }
  }
}

createGrid();

const puzzleToBeSolved = [ 
  '', 3, '', 2, '', '', '', '', 6, 
  '', '', '', '', '', 9, '', '', 4, 
  7, 6, '', '', '', '', '', '', '', 
  '', '', '', '', 5, '', 7, '', '', 
  '', '', '', '', '', 1, 8, 6, '', 
  '', 5, '', 4, 8, '', '', 9, '', 
  8, '', '', '', '', '', '', '', '', 
  '', '', '', '', 7, 6, '', '', '', 
  '', 7, 5, '', '', 8, 1, '', ''
];



function transformDataFormat(puzzle){
  let outerGrid = [];
  let innerGrid = []; 

  puzzle.forEach((arg, i) => {
    if ((i + 9) % 9 == 0  ){
      innerGrid = [];
    }

    innerGrid.push(arg);
    if(innerGrid.length == 9) {
      outerGrid.push(innerGrid);
    }
  })
  return outerGrid;
}


function drawPuzzle(gridPuzzle){
  const gridWrapper = d.getElementById("puzzle-wrapper");


  // gridWrapper.children.forEach((outerGrid, cubeIndex) => {
  //   outerGrid.children.forEach((innerGrid, cellIndex) => {

  //   })
  // })

  gridPuzzle.forEach((rowOfNine, rowOfNineIndex) => {
    rowOfNine.forEach((elem, elemIndex) => {
       let columnIndex = elemIndex + 9 % 9;
      //  console.log(elem + ' has row: ' + rowIndex + ' and columnindex: ' + columnIndex);
          let rowIndex = Math.floor(((rowArrIndex + 1) * elemIndex)/9);
    console.log(elem + ' has row: ' + rowIndex + ' and columnindex: ' + columnIndex);

    });
  })



}

// drawPuzzle(transPuzzle);

function solvePuzzle(puzzle){
  let arrayOfNineRows = transformDataFormat(puzzle);

  

}


solvePuzzle(puzzleToBeSolved);

