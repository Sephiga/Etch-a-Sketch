//16 x 16 grid 


let gridLoad = document.body.setAttribute('onload', "sixteenGrid()");
const grid = document.getElementById('grid-container');


function sixteenGrid(){
    for(i = 0; i < 16; i++){
        const gridRow = document.createElement('div');
        gridRow.className = 'row';
        grid.appendChild(gridRow);
        for(j = 0; j < 16; j++){
            const gridColumn = document.createElement('div');
            gridColumn.className = 'column';
            gridRow.appendChild(gridColumn);
            gridColumn.innerText = "999";
        } 
    }
    //hover effect - black 
    const colElement = document.getElementsByClassName("column");
        const colArray = Array.from(colElement);
        for (i = 0; i < colArray.length; i++){
            colArray[i].addEventListener('mouseover', function(e){
                e.target.className = "column-hover";
                console.log(e);
            });
}       
        
}

//grid sizing button - black
function gridSize(){

    

    let n = window.prompt("size? (8 to 64)");
    if (n < 8){
        alert("too small!")
        return gridSize();
    }
    if (n > 64){
        alert("too big!");
        return gridSize();
    }
    
    for(i = 0; i < n; i++){
        const gridRow = document.createElement('div');
        gridRow.className = 'row';
        grid.appendChild(gridRow);
        for(j = 0; j < n; j++){
            const gridColumn = document.createElement('div');
            gridColumn.className = 'column';
            gridRow.appendChild(gridColumn);
            gridColumn.innerText = "999";
        } 
    }
    const colElement = document.getElementsByClassName("column");
    const colArray = Array.from(colElement);
    for (i = 0; i < colArray.length; i++){
        colArray[i].addEventListener('mouseover', function(e){
            e.target.className = "column-hover";
        });
    }
    
}

//grid sizing button - RGB
function gridSizeRgb(){
    let n = window.prompt("size? (8 to 64)");
    if (n > 64){
        alert("invalid number!");
        return gridSize();
    }
    
    for(i = 0; i < n; i++){
        const gridRow = document.createElement('div');
        gridRow.className = 'row';
        grid.appendChild(gridRow);
        for(j = 0; j < n; j++){
            const gridColumn = document.createElement('div');
            gridColumn.className = 'column';
            gridRow.appendChild(gridColumn);
            gridColumn.innerText = "999";
        } 
    }
    const colElement = document.getElementsByClassName("column");
    const colArray = Array.from(colElement);
    for (i = 0; i < colArray.length; i++){
        colArray[i].addEventListener('mouseover', function(e){
            e.target.className = "column-hover";
        });
    }
}


//hover effect on each tile - get elements by class name [WORKS]
function hoverOn(){
    const colElement = document.getElementsByClassName("column");
    const colArray = Array.from(colElement);
    for (i = 0; i < colArray.length; i++){
        colArray[i].addEventListener('mouseover', function(e){
            e.target.className = "column-hover";
        });
    }
}


const gridButton = document.createElement('button');
gridButton.innerText = "Grid Size";
gridButton.setAttribute("onclick", "gridSize()");
document.getElementById('button').appendChild(gridButton);


const gridButtonRgb = document.createElement('button');
gridButtonRgb.innerText = "Grid Size (Rainbow)";
gridButtonRgb.setAttribute("onclick", "gridSizeRgb()");
document.getElementById('buttonRGB').appendChild(gridButtonRgb);














//hover effect on each tile - forEach e [WORKS]
        // const colElement = document.getElementsByClassName("column");
        // Array.from(colElement).forEach(e => {
        //     e.addEventListener('mouseover', function(e){
        //         this.className = "column-hover";
        //     });
        // });

//trials
            //hover effect on each tile - child

            // function hoverOn(){
            //     const targetRow = document.getElementById('grid-container');
            //     const targetColumn = targetRow.getElementsByClassName("column");
            //     let colArray = Array.from(targetColumn);
            //     for(let i = 0; i < colArray.length; i++){
            //         colArray[0].className = 'column-hover';     
            //     }
            // }

            // hover effect on each tile - for Each??
            // function hoverOn(){
            //  let collElement = document.getElementsByClassName("column");
            //  for (i = 0; i < collElement.length; i++){
            //     collElement[i].forEach(column => {
            //         column.collElement.className = 'column-hover';
            //    });
            //  }
            // }
